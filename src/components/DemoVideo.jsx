import { useEffect, useRef } from 'react';

// Video demo de un caso de estudio: silenciado y en loop, se reproduce
// solo mientras está en pantalla (y nunca con movimiento reducido).
function DemoVideo({ src, titulo }) {
	const videoRef = useRef(null);

	useEffect(() => {
		const video = videoRef.current;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return undefined;
		}
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					video.play().catch(() => {});
				} else {
					video.pause();
				}
			},
			{ threshold: 0.25 }
		);
		observer.observe(video);
		return () => observer.disconnect();
	}, []);

	return (
		<video
			ref={videoRef}
			src={src}
			muted
			loop
			playsInline
			controls
			preload='metadata'
			aria-label={`Video demo de ${titulo}`}
		/>
	);
}

export default DemoVideo;
