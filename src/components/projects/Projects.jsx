import style from "./project.module.css"
import Card from "../card/Card";
function Projects() {
	return (
			<section style={{marginTop: "15%"}}>
				<h2 className={style.titleProject} id="proyect">Mis Proyectos</h2>
				<br></br>
				<br/>
				<div className={style.cardContainer}>
				<Card></Card>
				</div>
				
			</section>
	);
}

export default Projects