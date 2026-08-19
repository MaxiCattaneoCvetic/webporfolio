import { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Proyecto from './pages/project/Proyecto';
import NotFound from './pages/NotFound';
import { initLenis, scrollToTarget } from './lib/lenis';

function ScrollManager() {
	const { pathname, hash } = useLocation();
	const prevPathname = useRef(pathname);

	useEffect(() => {
		const cambioDePagina = prevPathname.current !== pathname;
		prevPathname.current = pathname;

		if (hash) {
			const timer = setTimeout(() => scrollToTarget(hash), 80);
			return () => clearTimeout(timer);
		}
		scrollToTarget(0, { immediate: cambioDePagina });
		return undefined;
	}, [pathname, hash]);

	return null;
}

function App() {
	useEffect(() => {
		initLenis();
	}, []);

	return (
		<>
			<a className='skip-link' href='#contenido'>
				Saltar al contenido
			</a>
			<div className='grain' aria-hidden='true' />
			<Header />
			<ScrollManager />
			<main id='contenido'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/proyectos/:slug' element={<Proyecto />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
