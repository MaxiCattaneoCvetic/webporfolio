import profile from '../../../data/profile';
import ContactForm from './ContactForm';

function Contacto() {
	return (
		<section id='contacto' className='contact container'>
			<h2 className='label' data-reveal>
				Contacto
			</h2>
			<a className='contact-cta' href={`mailto:${profile.email}`} data-reveal>
				<em>¿Hablamos?</em>
			</a>
			<div className='contact-grid'>
				<div>
					<p className='contact-note' data-reveal>
						¿Tenés una idea o un proyecto en mente? Contame de qué se trata,
						o escribime directo a{' '}
						<a className='link' href={`mailto:${profile.email}`}>
							{profile.email}
						</a>
						.
					</p>
					<ul className='contact-links' data-reveal>
						<li>
							<a
								className='link'
								href={profile.links.linkedin}
								target='_blank'
								rel='noopener noreferrer'
							>
								LinkedIn ↗
							</a>
						</li>
						<li>
							<a
								className='link'
								href={profile.links.github}
								target='_blank'
								rel='noopener noreferrer'
							>
								GitHub ↗
							</a>
						</li>
						<li>
							<a
								className='link'
								href={profile.links.dutsiland}
								target='_blank'
								rel='noopener noreferrer'
							>
								Dutsiland ↗
							</a>
						</li>
						<li>
							<a className='link' href={profile.cv} download>
								Descargar CV ↓
							</a>
						</li>
					</ul>
				</div>
				<div data-reveal style={{ '--d': '0.1s' }}>
					<ContactForm />
				</div>
			</div>
		</section>
	);
}

export default Contacto;
