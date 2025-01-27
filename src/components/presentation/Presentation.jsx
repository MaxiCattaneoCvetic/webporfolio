import style from './presentation.module.css';
import { ReactTyped } from 'react-typed';
import { MdOutlineFileDownload } from 'react-icons/md';
import { MdDownloadDone } from 'react-icons/md';
import { useState } from 'react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

function Presentation() {
	const [isDownload, setIsDownload] = useState(false);

	const handleDownload = () => {
		setIsDownload(true);
	};

	return (
		<section className={style.presentationContainer}>
			<figure className={style.imgPresentationContainer}>
				<img src='/presentationLogo.png' alt='' />
			</figure>
			<div className={style.textContainerPresentation}>
				<h2 className={style.hola}>Hola!</h2>
				<div className={style.holaSoy}>
					<h2>Soy</h2>
					<h1 className={style.titleName}>Maximiliano Cattaneo Cvetic</h1>
				</div>
				<ReactTyped
					strings={['Backend specialist', 'Fullstack developer']}
					typeSpeed={40}
					backSpeed={40}
					loop
					className={style.typedText}
				/>
				<div className={style.cvContainer}>
					<a
						href='/Maximiliano_Cattaneo_Cvetic_CV.pdf'
						download='/Maximiliano_Cattaneo_Cvetic_CV.pdf'
						className={style.cv}
						style={{ textDecoration: 'underline var(--colorPrincipal)' }}
						onClick={handleDownload}
					>
						Descargar CV
						{isDownload ? (
							<MdDownloadDone
								style={{
									color: '#fcfcfc',
									cursor: 'pointer',
									border: '2px solid var(--colorPrincipal)',
									fontSize: '1.3rem',
									borderRadius: '4px',
									width: '25px',
									height: '25px',
								}}
								onClick={handleDownload}
							/>
						) : (
							<MdOutlineFileDownload
								style={{
									color: '#fcfcfc',
									cursor: 'pointer',
									border: '2px solid var(--colorPrincipal)',
									fontSize: '1.3rem',
									borderRadius: '4px',
									width: '25px',
									height: '25px',
								}}
								onClick={handleDownload}
							/>
						)}
					</a>
				</div>
				<div className={style.redes}>
					<a
						href='https://github.com/MaxiCattaneoCvetic'
						target='_blank'
						rel='noopener noreferrer'
						className={style.ab}
					>
						<FaGithubAlt />
					</a>
					<a
						href='https://www.linkedin.com/in/mcvetic/'
						target='_blank'
						rel='noopener noreferrer'
						className={style.ab}
					>
						<FaLinkedinIn />
					</a>
				</div>
			</div>
		</section>
	);
}

export default Presentation;
