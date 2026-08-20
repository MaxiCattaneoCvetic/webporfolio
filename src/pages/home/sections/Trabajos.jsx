import { Link } from 'react-router-dom';
import projects from '../../../data/projects';
import HoverParticles from '../../../components/HoverParticles';

function Trabajos() {
	return (
		<section id='trabajos' className='work container'>
			<div className='section-head' data-reveal>
				<h2 className='label'>Trabajos seleccionados</h2>
				<span className='label' aria-hidden='true'>
					({String(projects.length).padStart(2, '0')})
				</span>
			</div>
			<ul className='work-list'>
				{projects.map((project, index) => (
					<li
						className='work-row'
						key={project.slug}
						data-reveal
						style={{ '--d': `${index * 0.05}s` }}
					>
						<Link className='work-link' to={`/proyectos/${project.slug}`}>
							<span className='work-index'>
								{String(index + 1).padStart(2, '0')}
							</span>
							<span className='work-title'>{project.nombre}</span>
							<span className='work-meta'>{project.categoria}</span>
							<span className='work-stack'>{project.stackCorto}</span>
							<span className='work-arrow' aria-hidden='true'>
								→
							</span>
						</Link>
					</li>
				))}
			</ul>
			<HoverParticles />
		</section>
	);
}

export default Trabajos;
