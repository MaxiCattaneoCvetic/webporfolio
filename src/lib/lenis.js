import Lenis from 'lenis';

let lenis = null;

export function initLenis() {
	if (lenis) return lenis;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

	lenis = new Lenis({ lerp: 0.12 });
	window.__lenis = lenis;

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

	return lenis;
}

export function scrollToTarget(target, options = {}) {
	if (lenis) {
		lenis.scrollTo(target, { duration: 1.4, ...options });
		return;
	}
	if (typeof target === 'number') {
		window.scrollTo({ top: target, behavior: options.immediate ? 'auto' : 'smooth' });
		return;
	}
	const el = typeof target === 'string' ? document.querySelector(target) : target;
	el?.scrollIntoView({ behavior: options.immediate ? 'auto' : 'smooth' });
}
