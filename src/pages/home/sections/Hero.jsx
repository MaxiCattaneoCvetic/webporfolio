import profile from '../../../data/profile';
import HeroField from '../../../components/HeroField';
import { scrollToTarget } from '../../../lib/lenis';

function Hero() {
	return (
		<section id='top' className='hero container'>
			<HeroField />
			<p className='hero-eyebrow label'>
				{profile.rol} · {profile.ubicacion}
			</p>
			<h1 className='hero-headline' aria-label='Transformo ideas en proyectos.'>
				<span aria-hidden='true'>
					<span className='hero-line'>
						<span className='hero-line-inner'>Transformo</span>
					</span>
					<span className='hero-line'>
						<span className='hero-line-inner'>ideas en</span>
					</span>
					<span className='hero-line'>
						<span className='hero-line-inner'>
							<em>proyectos.</em>
						</span>
					</span>
				</span>
			</h1>
			<div className='hero-foot'>
				<p className='hero-intro'>{profile.heroIntro}</p>
				<a
					className='hero-scroll label link'
					href='#trabajos'
					onClick={(e) => {
						e.preventDefault();
						scrollToTarget('#trabajos');
					}}
				>
					Scroll ↓
				</a>
			</div>
		</section>
	);
}

export default Hero;
