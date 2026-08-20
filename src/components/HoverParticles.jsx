import { useEffect, useRef } from 'react';

// Subrayado de partículas para la lista de trabajos: al hacer hover en una
// fila, una nube de puntos acento se condensa formando la línea bajo el
// título — misma mecánica que la palabra del hero (llegada escalonada en
// onda + arcos de cometa) — y se disuelve al salir. Canvas 2D único, animado
// solo durante el hover; inactivo en pantallas táctiles y con motion reducido.

function HoverParticles({
	rowSelector = '.work-link',
	titleSelector = '.work-title',
}) {
	const canvasRef = useRef(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return undefined;
		}
		if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
			return undefined;
		}

		const canvas = canvasRef.current;
		const host = canvas.parentElement;
		const ctx = canvas.getContext('2d');
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const accent =
			getComputedStyle(document.documentElement)
				.getPropertyValue('--accent')
				.trim() || '#ff5c28';

		let particles = [];
		let range = null;
		let fontSize = 0;
		let mode = 'idle';
		let t0 = 0;
		let rafId = 0;
		let activeRow = null;

		const resize = () => {
			const rect = host.getBoundingClientRect();
			canvas.width = Math.max(1, Math.round(rect.width * dpr));
			canvas.height = Math.max(1, Math.round(rect.height * dpr));
		};

		const measureLines = () => {
			if (!range) return [];
			const hostRect = host.getBoundingClientRect();
			return Array.from(range.getClientRects()).map((r) => ({
				x: (r.left - hostRect.left) * dpr,
				y: (r.bottom - hostRect.top - fontSize * 0.05) * dpr,
				w: r.width * dpr,
			}));
		};

		const buildParticles = () => {
			const lines = measureLines();
			const total = lines.reduce((sum, line) => sum + line.w, 0);
			if (!total) return false;
			const count = Math.min(900, Math.round(total / dpr / 1.1));
			particles = [];
			let acc = 0;
			lines.forEach((line, index) => {
				const n = Math.max(1, Math.round(count * (line.w / total)));
				for (let i = 0; i < n; i++) {
					const along = Math.random() * line.w;
					particles.push({
						line: index,
						along,
						jit: (Math.random() - 0.5) * 3.5 * dpr,
						// onda de llegada: sigue el recorrido de la línea, con algo de azar
						d: ((acc + along) / total) * 0.7 + Math.random() * 0.3,
						// origen disperso: la nube desde donde vuela cada punto,
						// proporcional al tamaño de la tipografía
						sx: (Math.random() - 0.5) * fontSize * 4 * dpr,
						sy: (Math.random() - 0.5) * fontSize * 2.4 * dpr,
						side: Math.random() < 0.5 ? -1 : 1,
						s: (0.7 + Math.random() * 1.6) * dpr,
						a: 0.35 + Math.random() * 0.65,
						ph: Math.random() * Math.PI * 2,
						vx: (Math.random() - 0.5) * 1.2 * dpr,
						vy: -(0.4 + Math.random() * 1.4) * dpr,
						x: 0,
						y: 0,
					});
				}
				acc += line.w;
			});
			return true;
		};

		const draw = (now) => {
			rafId = 0;
			const t = (now - t0) / 1000;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = accent;

			if (mode === 'in') {
				const lines = measureLines();
				if (!lines.length) {
					mode = 'idle';
					return;
				}
				const p = Math.min(1, t / 0.75);
				const cloudIn = Math.min(1, p * 6);
				for (const pt of particles) {
					const line = lines[pt.line] || lines[lines.length - 1];
					// destino sobre la línea (sigue al título si se desliza)
					const tx = line.x + pt.along;
					const ty =
						line.y + pt.jit + Math.sin(now / 240 + pt.ph) * 0.9 * dpr;

					// asentamiento escalonado con suavizado, como el hero
					const local = Math.min(
						1,
						Math.max(0, (p - pt.d * 0.35) / 0.65)
					);
					const settle = local * local * (3 - 2 * local);

					// vuelo desde el origen disperso, con arco de cometa:
					// sin(pi*settle) es cero en ambos extremos, así que ni el
					// origen ni la llegada se alteran.
					const span = Math.hypot(pt.sx, pt.sy) || 1;
					const arc =
						Math.sin(Math.PI * settle) * span * 0.25 * pt.side;
					const nx = pt.sy / span;
					const ny = -pt.sx / span;
					pt.x = tx + pt.sx * (1 - settle) + nx * arc;
					pt.y = ty + pt.sy * (1 - settle) + ny * arc;

					const swell = Math.sin(Math.PI * settle);
					ctx.globalAlpha = Math.min(
						1,
						pt.a * cloudIn * (0.14 + 0.86 * settle) + swell * 0.15
					);
					const size = pt.s + swell * 0.8 * dpr;
					ctx.fillRect(pt.x, pt.y, size, size);
				}
				ctx.globalAlpha = 1;
				rafId = requestAnimationFrame(draw);
			} else if (mode === 'out') {
				const p = Math.min(1, t / 0.4);
				for (const pt of particles) {
					ctx.globalAlpha = pt.a * (1 - p);
					ctx.fillRect(
						pt.x + pt.vx * p * 26,
						pt.y + pt.vy * p * 26,
						pt.s,
						pt.s
					);
				}
				ctx.globalAlpha = 1;
				if (p < 1) {
					rafId = requestAnimationFrame(draw);
				} else {
					particles = [];
					mode = 'idle';
					ctx.clearRect(0, 0, canvas.width, canvas.height);
				}
			}
		};

		const start = (row) => {
			const title = row.querySelector(titleSelector);
			if (!title) return;
			resize();
			range = document.createRange();
			range.selectNodeContents(title);
			fontSize = parseFloat(getComputedStyle(title).fontSize);
			if (!buildParticles()) return;
			mode = 'in';
			t0 = performance.now();
			if (!rafId) rafId = requestAnimationFrame(draw);
		};

		const stop = () => {
			if (mode !== 'in') return;
			mode = 'out';
			t0 = performance.now();
			range = null;
			if (!rafId) rafId = requestAnimationFrame(draw);
		};

		const onOver = (e) => {
			const row = e.target.closest(rowSelector);
			if (row === activeRow) return;
			activeRow = row;
			if (row) {
				start(row);
			} else {
				stop();
			}
		};
		const onLeave = () => {
			activeRow = null;
			stop();
		};

		host.addEventListener('mouseover', onOver);
		host.addEventListener('mouseleave', onLeave);

		return () => {
			host.removeEventListener('mouseover', onOver);
			host.removeEventListener('mouseleave', onLeave);
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, [rowSelector, titleSelector]);

	return <canvas ref={canvasRef} className='hover-canvas' aria-hidden='true' />;
}

export default HoverParticles;
