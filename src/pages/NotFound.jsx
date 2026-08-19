import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	useEffect(() => {
		document.title = 'Página no encontrada — Maximiliano Cattaneo Cvetic';
	}, []);

	return (
		<section className='cs-missing container'>
			<span className='label'>Error 404</span>
			<h1 className='cs-missing-title'>Página no encontrada.</h1>
			<Link className='link' to='/'>
				Volver al inicio ←
			</Link>
		</section>
	);
}

export default NotFound;
