import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../../data/projects';
import NotFound from '../NotFound';
import DemoVideo from '../../components/DemoVideo';
import HoverParticles from '../../components/HoverParticles';
import { initReveals } from '../../lib/reveal';

const emojiInicial = /^\p{Extended_Pictographic}/u;

function parseDetalle(texto) {
	const lineas = texto
		.split('\n')
		.map((linea) => linea.trim())
		.filter(Boolean);

	const bloques = [];
	lineas.forEach((linea) => {
		if (emojiInicial.test(linea)) {
			const ultimo = bloques[bloques.length - 1];
			if (ultimo && ultimo.tipo === 'lista') {
				ultimo.items.push(linea);
			} else {
				bloques.push({ tipo: 'lista', items: [linea] });
			}
		} else {
			bloques.push({ tipo: 'parrafo', texto: linea });
		}
	});
	return bloques;
}

function buildEnlaces(project) {
	const url = project.url[0] ?? {};
	const enlaces = [];
	if (url.codigo) {
		enlaces.push({ label: 'Ver código ↗', href: url.codigo });
	}
	if (url.isReady && url.deploy) {
		enlaces.push({ label: 'Ver demo ↗', href: url.deploy });
	}
	if (url.isVideo && url.video) {
		enlaces.push({ label: 'Ver video ↗', href: url.video });
	}
	return enlaces;
}

function Proyecto() {
	const { slug } = useParams();
	const index = projects.findIndex((p) => p.slug === slug);
	const project = index === -1 ? null : projects[index];

	useEffect(() => {
		if (project) {
			document.title = `${project.nombre} — Maximiliano Cattaneo Cvetic`;
			return initReveals();
		}
		return undefined;
	}, [project]);

	if (!project) {
		return <NotFound />;
	}

	const siguiente = projects[(index + 1) % projects.length];
	const enlaces = buildEnlaces(project);
	const bloques = parseDetalle(project.moredetails);

	return (
		<article className='cs' key={project.slug}>
			<header className='cs-head container'>
				<Link className='cs-back link' to='/#trabajos'>
					← Volver a trabajos
				</Link>
				<span className='cs-meta label'>
					{project.emoji} Proyecto {String(index + 1).padStart(2, '0')} ·{' '}
					{project.categoria}
				</span>
				<h1 className='cs-title'>
					<span className='cs-title-line'>
						<span className='cs-title-inner'>{project.nombre}</span>
					</span>
				</h1>
				<p className='cs-summary'>{project.details}</p>
				<dl className='cs-facts'>
					<div>
						<dt className='label'>Rol</dt>
						<dd>{project.rol}</dd>
					</div>
					<div>
						<dt className='label'>Contexto</dt>
						<dd>{project.contexto}</dd>
					</div>
					<div>
						<dt className='label'>Stack</dt>
						<dd>
							<ul className='tech-list'>
								{project.technologies.map((tech) => (
									<li key={tech.name}>
										<span
											className='tech-dot'
											style={{ background: tech.color }}
											aria-hidden='true'
										/>
										{tech.name}
									</li>
								))}
							</ul>
						</dd>
					</div>
					{enlaces.length > 0 ? (
						<div>
							<dt className='label'>Enlaces</dt>
							<dd>
								<ul className='cs-links'>
									{enlaces.map((enlace) => (
										<li key={enlace.href}>
											<a
												className='link'
												href={enlace.href}
												target='_blank'
												rel='noopener noreferrer'
											>
												{enlace.label}
											</a>
										</li>
									))}
								</ul>
							</dd>
						</div>
					) : null}
				</dl>
			</header>

			<div className='container'>
				<ul className='ig-grid'>
					{(project.videos ?? []).map((video, _, videos) => {
						const esVertical = video.formato === 'vertical';
						const hayAmbos =
							videos.some((v) => v.formato === 'vertical') &&
							videos.some((v) => v.formato !== 'vertical');
						const claseBase = esVertical
							? 'ig-item ig-video-vertical'
							: 'ig-item ig-full';
						const claseResponsive = hayAmbos
							? esVertical
								? ' solo-mobile'
								: ' solo-desktop'
							: '';
						return (
							<li
								className={claseBase + claseResponsive}
								key={video.src}
								data-reveal
							>
								<DemoVideo src={video.src} titulo={project.nombre} />
							</li>
						);
					})}
					{project.image.map((src, i) => (
						<li
							className={i === 0 ? 'ig-item ig-full' : 'ig-item'}
							key={src}
							data-reveal
						>
							<img
								src={src}
								alt={`${project.nombre} — captura ${i + 1}`}
								loading={i === 0 ? 'eager' : 'lazy'}
							/>
						</li>
					))}
				</ul>
			</div>

			<div className='cs-block container'>
				<h2 className='label'>Sobre el proyecto</h2>
				<div className='cs-prose'>
					{bloques.map((bloque, i) =>
						bloque.tipo === 'lista' ? (
							<ul key={`bloque-${i}`}>
								{bloque.items.map((item) => (
									<li key={item.slice(0, 32)}>{item}</li>
								))}
							</ul>
						) : (
							<p key={bloque.texto.slice(0, 32)}>{bloque.texto}</p>
						)
					)}
				</div>
			</div>

			<nav className='cs-next container' aria-label='Siguiente proyecto'>
				<span className='label'>Siguiente proyecto</span>
				<Link className='cs-next-link' to={`/proyectos/${siguiente.slug}`}>
					<span className='cs-next-title'>{siguiente.nombre} →</span>
				</Link>
				<HoverParticles
					rowSelector='.cs-next-link'
					titleSelector='.cs-next-title'
				/>
			</nav>
		</article>
	);
}

export default Proyecto;
