import { Link } from 'react-router-dom';
import profile from '../data/profile';

const navLinks = [
	{ label: 'Trabajos', hash: '#trabajos' },
	{ label: 'Perfil', hash: '#perfil' },
	{ label: 'Proceso', hash: '#proceso' },
	{ label: 'Contacto', hash: '#contacto' },
];

function Header() {
	return (
		<header className='site-header'>
			<Link to='/' className='site-name'>
				{profile.nombre}
			</Link>
			<nav className='site-nav' aria-label='Navegación principal'>
				{navLinks.map((item) => (
					<Link key={item.hash} className='link' to={`/${item.hash}`}>
						{item.label}
					</Link>
				))}
			</nav>
		</header>
	);
}

export default Header;
