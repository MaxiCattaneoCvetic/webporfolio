import ProjectCards from '../card/ProjectCards';
import style from './project.module.css';

function Projects() {
	return (
		<section>
			<h2 className={style.titleProject} id='proyect'>
				Mis Proyectos{' '}
			</h2>
			<div className={style.cardContainer}>
				<ProjectCards />

			</div>
		</section>
	);
}

export default Projects;
