import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import style from './footer.module.css';

function Footer() {
	const getDate = () => {
		const date = new Date();
		return date.getFullYear();
	};

	return (
		<footer className={style.footer}>
			<div>
				<p className={style.desing}>
					© Todos los derechos reservados {getDate()}.
				</p>
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
		</footer>
	);
}

export default Footer;
