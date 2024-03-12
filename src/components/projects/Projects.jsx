import style from "./project.module.css"
import Card from "../card/Card";
function Projects() {
	return (
			<section style={{marginTop: "15%"}}>
				<h2 className={style.titleProject}>Mis Proyectos</h2>
				<div className={style.cardContainer}>
				<Card></Card>
				</div>
				
			</section>
	);
}

export default Projects