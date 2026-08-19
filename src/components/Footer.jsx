import profile from '../data/profile';
import { scrollToTarget } from '../lib/lenis';

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className='site-footer'>
			<p>
				© {year} {profile.nombre}. Todos los derechos reservados.
			</p>
			<ul className='footer-links'>
				<li>
					<a
						className='link'
						href={profile.links.github}
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub
					</a>
				</li>
				<li>
					<a
						className='link'
						href={profile.links.linkedin}
						target='_blank'
						rel='noopener noreferrer'
					>
						LinkedIn
					</a>
				</li>
				<li>
					<a
						className='link'
						href={profile.links.dutsiland}
						target='_blank'
						rel='noopener noreferrer'
					>
						Dutsiland
					</a>
				</li>
			</ul>
			<button
				className='link'
				type='button'
				onClick={() => scrollToTarget(0)}
			>
				Volver arriba ↑
			</button>
		</footer>
	);
}

export default Footer;
