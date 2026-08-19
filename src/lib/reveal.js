export function initReveals(root = document) {
	const elements = root.querySelectorAll('[data-reveal]:not(.is-in)');

	if (!('IntersectionObserver' in window)) {
		elements.forEach((el) => el.classList.add('is-in'));
		return () => {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-in');
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
	);

	elements.forEach((el) => observer.observe(el));
	return () => observer.disconnect();
}
