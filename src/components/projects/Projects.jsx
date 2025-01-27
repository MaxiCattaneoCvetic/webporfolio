import style from './project.module.css';
import Card from '../card/Card';
function Projects() {
	return (
		<section>
			<h2 className={style.titleProject} id='proyect'>
				Mis Proyectos{' '}
			</h2>
			<div className={style.cardContainer}>
				<Card></Card>
			</div>
		</section>
	);
}

export default Projects;
