import { useEffect } from 'react';
import Hero from './sections/Hero';
import Trabajos from './sections/Trabajos';
import Perfil from './sections/Perfil';
import Proceso from './sections/Proceso';
import Contacto from './sections/Contacto';
import { initReveals } from '../../lib/reveal';

function Home() {
	useEffect(() => {
		document.title = 'Maximiliano Cattaneo Cvetic — Desarrollador de Software';
		return initReveals();
	}, []);

	return (
		<>
			<Hero />
			<Trabajos />
			<Perfil />
			<Proceso />
			<Contacto />
		</>
	);
}

export default Home;
