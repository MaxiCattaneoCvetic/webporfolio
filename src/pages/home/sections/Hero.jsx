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
			<h1 className='hero-headline' aria-label='Construyo sistemas que escalan.'>
				<span aria-hidden='true'>
					<span className='hero-line'>
						<span className='hero-line-inner'>Construyo</span>
					</span>
					<span className='hero-line'>
						<span className='hero-line-inner'>sistemas que</span>
					</span>
					<span className='hero-line'>
						<span className='hero-line-inner'>
							<em>escalan.</em>
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
