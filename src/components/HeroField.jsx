import { useEffect, useRef } from 'react';

// Campo de partículas del hero (WebGL2), inspirado en bouayaben.com:
// una nube ambiental fluye por curl-noise y responde al cursor; a los
// ~2s la mitad de las partículas condensa formando la palabra <em> del
// titular, que se desvanece y queda "dibujada" en partículas acento.

const VERTEX_SRC = `#version 300 es
precision highp float;
in vec4 aSeed;
in vec4 aTgt;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uPointer;
uniform float uDpr;
uniform vec4 uGuard;
uniform float uMorph;
uniform vec2 uTouch;
uniform float uTouchAmp;
out float vAlpha;
out float vAccent;
out float vSettle;

float pot(vec2 p, float t) {
  return sin(p.x * 1.4 + t * 0.42) * cos(p.y * 1.1 - t * 0.31)
       + sin(p.y * 1.9 - t * 0.36) * cos(p.x * 0.8 + t * 0.27);
}

vec2 curl(vec2 p, float t) {
  const float e = 0.11;
  float dx = pot(p + vec2(e, 0.0), t) - pot(p - vec2(e, 0.0), t);
  float dy = pot(p + vec2(0.0, e), t) - pot(p - vec2(0.0, e), t);
  return vec2(dy, -dx) / (2.0 * e);
}

void main() {
  vec2 home = aSeed.xy * uRes;

  vec2 fp = home / uRes.y * 3.0 + aSeed.w * 7.0;
  vec2 p = home + curl(fp, uTime * 0.35) * (10.0 + 24.0 * aSeed.z) * uDpr;

  vec2 d = p - uPointer;
  float dist2 = dot(d, d) + 60.0;
  p += d * inversesqrt(dist2) * min(9000.0 * uDpr * uDpr / dist2, 46.0 * uDpr);

  float tD = distance(p, uTouch);
  vec2 tDir = (p - uTouch) / max(tD, 1e-3);
  p += tDir * uTouchAmp * exp(-tD / (190.0 * uDpr))
     * sin(tD * 0.05 / uDpr - uTime * 20.0) * 40.0 * uDpr;

  float local = clamp((uMorph - aTgt.w * 0.35) / 0.65, 0.0, 1.0);
  float eased = local * local * (3.0 - 2.0 * local);
  float settle = eased * aTgt.z;
  vSettle = settle;

  vec2 chord = aTgt.xy - p;
  float span = length(chord);
  vec2 dir = chord / max(span, 1e-4);
  vec2 perp = vec2(-dir.y, dir.x);
  float side = fract(sin(dot(aSeed.zw, vec2(127.1, 311.7))) * 43758.5453) - 0.5;
  vec2 pos = mix(p, aTgt.xy, settle)
           + perp * sin(3.14159265 * settle) * span * 0.2 * side;

  vec2 d2 = pos - uPointer;
  float dd = dot(d2, d2) + 80.0;
  pos += d2 * inversesqrt(dd)
       * min(2600.0 * uDpr * uDpr / dd, 15.0 * uDpr) * settle;

  vec2 g1 = uGuard.xy;
  vec2 g2 = uGuard.xy + uGuard.zw;
  float feather = 44.0 * uDpr;
  vec2 s = smoothstep(g1 - feather, g1 + feather, pos)
         * (1.0 - smoothstep(g2 - feather, g2 + feather, pos));
  vAlpha = mix(mix(1.0, 0.15, s.x * s.y), 1.0, settle);

  vAccent = step(0.94, fract(aSeed.z * 7.31 + aSeed.w * 3.17));

  vec2 clip = pos / uRes * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
  float swell = sin(3.14159265 * settle);
  gl_PointSize = (0.8 + 1.3 * aSeed.z + swell * 0.9 + settle * 0.9) * uDpr;
}`;

const FRAGMENT_SRC = `#version 300 es
precision mediump float;
in float vAlpha;
in float vAccent;
in float vSettle;
uniform vec3 uInk;
uniform vec3 uAccentCol;
uniform float uFade;
out vec4 outColor;

void main() {
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  float m = 1.0 - smoothstep(0.5, 1.0, dot(c, c));
  vec3 col = mix(mix(uInk, uAccentCol, vAccent), uAccentCol,
                 smoothstep(0.5, 0.95, vSettle));
  float ambient = (0.08 + 0.15 * vAccent) * vAlpha;
  float a = m * uFade *
    (mix(ambient, 0.85, vSettle) + sin(3.14159265 * vSettle) * 0.18);
  outColor = vec4(col * a, a);
}`;

function hexToRgb(hex) {
	let value = hex.trim().replace('#', '');
	if (value.length === 3) {
		value = value
			.split('')
			.map((ch) => ch + ch)
			.join('');
	}
	const num = parseInt(value, 16);
	return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255];
}

function particleBudget() {
	if (window.matchMedia('(max-width: 720px)').matches) return 20000;
	return (navigator.hardwareConcurrency || 4) >= 8 ? 70000 : 40000;
}

function HeroField() {
	const canvasRef = useRef(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return undefined;
		}
		const canvas = canvasRef.current;
		const hero = canvas.parentElement;
		const gl = canvas.getContext('webgl2', {
			alpha: true,
			antialias: false,
			depth: false,
			powerPreference: 'low-power',
		});
		if (!gl) return undefined;

		const compile = (type, source) => {
			const shader = gl.createShader(type);
			gl.shaderSource(shader, source);
			gl.compileShader(shader);
			if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
				console.warn('hero-field shader:', gl.getShaderInfoLog(shader));
				return null;
			}
			return shader;
		};
		const vs = compile(gl.VERTEX_SHADER, VERTEX_SRC);
		const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT_SRC);
		if (!vs || !fs) return undefined;

		const program = gl.createProgram();
		gl.attachShader(program, vs);
		gl.attachShader(program, fs);
		gl.linkProgram(program);
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return undefined;
		gl.useProgram(program);

		const count = particleBudget();
		const seeds = new Float32Array(count * 4);
		for (let i = 0; i < count * 4; i++) seeds[i] = Math.random();
		const seedBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, seedBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, seeds, gl.STATIC_DRAW);
		const aSeed = gl.getAttribLocation(program, 'aSeed');
		gl.enableVertexAttribArray(aSeed);
		gl.vertexAttribPointer(aSeed, 4, gl.FLOAT, false, 0, 0);

		const targetBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, targetBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(count * 4), gl.DYNAMIC_DRAW);
		const aTgt = gl.getAttribLocation(program, 'aTgt');
		gl.enableVertexAttribArray(aTgt);
		gl.vertexAttribPointer(aTgt, 4, gl.FLOAT, false, 0, 0);

		const loc = (name) => gl.getUniformLocation(program, name);
		const uRes = loc('uRes');
		const uTime = loc('uTime');
		const uPointer = loc('uPointer');
		const uGuard = loc('uGuard');
		const uFade = loc('uFade');
		const uMorph = loc('uMorph');
		const uTouch = loc('uTouch');
		const uTouchAmp = loc('uTouchAmp');

		const rootStyles = getComputedStyle(document.documentElement);
		gl.uniform3fv(loc('uInk'), hexToRgb(rootStyles.getPropertyValue('--ink') || '#f5f0eb'));
		gl.uniform3fv(loc('uAccentCol'), hexToRgb(rootStyles.getPropertyValue('--accent') || '#ff5c28'));
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
		gl.clearColor(0, 0, 0, 0);

		const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
		gl.uniform1f(loc('uDpr'), dpr);

		const findWord = () => {
			const em = hero.querySelector('.hero-headline em');
			if (!em) return null;
			let x = 0;
			let y = 0;
			let node = em;
			while (node && node !== hero) {
				x += node.offsetLeft;
				y += node.offsetTop;
				node = node.offsetParent;
			}
			const rect = em.getBoundingClientRect();
			return { em, x, y, w: rect.width, h: rect.height };
		};

		const resize = () => {
			const rect = hero.getBoundingClientRect();
			canvas.width = Math.max(1, Math.round(rect.width * dpr));
			canvas.height = Math.max(1, Math.round(rect.height * dpr));
			gl.viewport(0, 0, canvas.width, canvas.height);
			gl.uniform2f(uRes, canvas.width, canvas.height);
			const headline = hero.querySelector('.hero-headline');
			if (headline) {
				const hb = headline.getBoundingClientRect();
				gl.uniform4f(
					uGuard,
					(hb.left - rect.left) * dpr,
					(hb.top - rect.top) * dpr,
					hb.width * dpr,
					hb.height * dpr
				);
			}
		};
		resize();

		const sampleWord = () => {
			const word = findWord();
			if (!word) return null;
			const style = getComputedStyle(word.em);
			const text = word.em.textContent;
			const fontSize = parseFloat(style.fontSize);
			const off = document.createElement('canvas');
			const ctx = off.getContext('2d', { willReadFrequently: true });
			const setFont = () => {
				ctx.font = `${style.fontStyle} ${style.fontWeight} ${fontSize}px ${style.fontFamily}`;
				try {
					ctx.letterSpacing =
						style.letterSpacing === 'normal' ? '0px' : style.letterSpacing;
				} catch {
					/* letterSpacing no soportado */
				}
			};
			setFont();
			const pad = Math.ceil(fontSize * 0.6);
			off.width = Math.ceil(ctx.measureText(text).width + pad * 2);
			off.height = Math.ceil(fontSize * 1.7);
			setFont();
			ctx.fillStyle = '#fff';
			ctx.textBaseline = 'alphabetic';
			ctx.fillText(text, pad, Math.round(fontSize * 1.15));

			const data = ctx.getImageData(0, 0, off.width, off.height).data;
			const points = [];
			let minX = 1e9;
			let minY = 1e9;
			let maxX = -1e9;
			let maxY = -1e9;
			for (let row = 0; row < off.height; row++) {
				for (let col = 0; col < off.width; col++) {
					if (data[(row * off.width + col) * 4 + 3] > 128) {
						const px = col + Math.random();
						const py = row + Math.random();
						points.push([px, py]);
						if (px < minX) minX = px;
						if (py < minY) minY = py;
						if (px > maxX) maxX = px;
						if (py > maxY) maxY = py;
					}
				}
			}
			if (!points.length) return null;
			return {
				em: word.em,
				points,
				boxCenter: [(minX + maxX) / 2, (minY + maxY) / 2],
				wordCenter: [word.x + word.w / 2, word.y + word.h / 2],
			};
		};

		let wordEl = null;
		const buildTargets = () => {
			const sample = sampleWord();
			if (!sample) return;
			wordEl = sample.em;
			const { points } = sample;
			for (let i = points.length - 1; i > 0; i--) {
				const j = (Math.random() * (i + 1)) | 0;
				const tmp = points[i];
				points[i] = points[j];
				points[j] = tmp;
			}
			const used = Math.min(points.length, Math.floor(count * 0.5));
			const targets = new Float32Array(count * 4);
			for (let i = 0; i < used; i++) {
				targets[i * 4] = (sample.wordCenter[0] + (points[i][0] - sample.boxCenter[0])) * dpr;
				targets[i * 4 + 1] = (sample.wordCenter[1] + (points[i][1] - sample.boxCenter[1])) * dpr;
				targets[i * 4 + 2] = 1;
				targets[i * 4 + 3] = Math.random();
			}
			gl.bindBuffer(gl.ARRAY_BUFFER, targetBuffer);
			gl.bufferData(gl.ARRAY_BUFFER, targets, gl.DYNAMIC_DRAW);
		};

		const pointer = { x: -9e4, y: -9e4, tx: -9e4, ty: -9e4 };
		const onPointerMove = (e) => {
			pointer.tx = e.clientX;
			pointer.ty = e.clientY;
		};
		const onPointerLeave = () => {
			pointer.tx = -9e4;
			pointer.ty = -9e4;
		};
		window.addEventListener('pointermove', onPointerMove, { passive: true });
		document.documentElement.addEventListener('pointerleave', onPointerLeave);

		const touch = { x: -9e4, y: -9e4, amp: 0 };
		const onTouch = (e) => {
			if (e.pointerType !== 'touch') return;
			const rect = canvas.getBoundingClientRect();
			touch.x = (e.clientX - rect.left) * dpr;
			touch.y = (e.clientY - rect.top) * dpr;
			touch.amp = e.type === 'pointerdown' ? 1 : Math.min(1, touch.amp + 0.3);
		};
		window.addEventListener('pointerdown', onTouch, { passive: true });
		window.addEventListener('pointermove', onTouch, { passive: true });

		let disposed = false;
		let morphStart = 0;
		let morphPending = false;
		let fontsTimer = 0;
		let rafId = 0;
		let running = false;
		let fade = 0;

		// El fundido de la palabra real recién arranca cuando el loop puede
		// dibujar su reemplazo; si la pestaña está oculta, queda pendiente.
		const tryStartMorph = () => {
			if (!morphPending || !running || !wordEl || morphStart) return;
			morphPending = false;
			morphStart = performance.now();
			wordEl.style.transition = 'opacity 0.7s ease';
			wordEl.style.opacity = '0';
		};

		if (document.fonts && document.fonts.ready) {
			document.fonts.ready.then(() => {
				if (disposed) return;
				resize();
				fontsTimer = setTimeout(() => {
					if (disposed) return;
					resize();
					buildTargets();
					if (wordEl) {
						morphPending = true;
						tryStartMorph();
					}
				}, 1800);
			});
		}

		const t0 = performance.now();
		const render = (now) => {
			rafId = 0;
			if (!running) return;
			fade = Math.min(1, fade + 0.016);
			pointer.x += (pointer.tx - pointer.x) * 0.22;
			pointer.y += (pointer.ty - pointer.y) * 0.22;
			touch.amp *= 0.965;
			const rect = canvas.getBoundingClientRect();
			gl.uniform1f(uTime, (now - t0) / 1000);
			gl.uniform2f(uPointer, (pointer.x - rect.left) * dpr, (pointer.y - rect.top) * dpr);
			gl.uniform2f(uTouch, touch.x, touch.y);
			gl.uniform1f(uTouchAmp, touch.amp);
			gl.uniform1f(uFade, fade * fade);
			gl.uniform1f(uMorph, morphStart ? Math.min(1, (now - morphStart) / 1900) : 0);
			gl.clear(gl.COLOR_BUFFER_BIT);
			gl.drawArrays(gl.POINTS, 0, count);
			rafId = requestAnimationFrame(render);
		};
		const setRunning = (value) => {
			running = value;
			if (value && !rafId) rafId = requestAnimationFrame(render);
			if (value) tryStartMorph();
		};

		const observer = new IntersectionObserver(
			([entry]) => setRunning(entry.isIntersecting && !document.hidden),
			{ threshold: 0.02 }
		);
		observer.observe(canvas);
		const onVisibility = () => setRunning(!document.hidden);
		document.addEventListener('visibilitychange', onVisibility);

		const onResize = () => {
			resize();
			if (wordEl) buildTargets();
		};
		window.addEventListener('resize', onResize);

		const onContextLost = (e) => {
			e.preventDefault();
			setRunning(false);
			canvas.style.opacity = '0';
			if (wordEl) wordEl.style.opacity = '';
		};
		canvas.addEventListener('webglcontextlost', onContextLost);

		return () => {
			disposed = true;
			setRunning(false);
			if (rafId) cancelAnimationFrame(rafId);
			clearTimeout(fontsTimer);
			if (wordEl) {
				wordEl.style.transition = '';
				wordEl.style.opacity = '';
			}
			observer.disconnect();
			document.removeEventListener('visibilitychange', onVisibility);
			window.removeEventListener('resize', onResize);
			window.removeEventListener('pointermove', onPointerMove);
			window.removeEventListener('pointerdown', onTouch);
			window.removeEventListener('pointermove', onTouch);
			document.documentElement.removeEventListener('pointerleave', onPointerLeave);
			canvas.removeEventListener('webglcontextlost', onContextLost);
		};
	}, []);

	return <canvas ref={canvasRef} className='hero-field' aria-hidden='true' />;
}

export default HeroField;
