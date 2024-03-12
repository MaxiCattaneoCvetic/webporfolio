import style from "./presentation.module.css";
import { ReactTyped } from "react-typed";
import { MdOutlineFileDownload } from "react-icons/md";

function Presentation() {
  return (
    <section className={style.presentationContainer}>
      <div className={style.imgPresentationContainer}>
        <img src="/presentationLogo.png" alt="" />
      </div>
      <div className={style.textContainerPresentation}>
        <h2 className={style.hola}>Hola!</h2>
        <div className={style.holaSoy}>
          <h2>Soy</h2>
          <h1 className={style.titleName}>Maximiliano Cattaneo Cvetic</h1>
        </div>
        <ReactTyped
          strings={["Desarollador Backend", "Licenciado en Administración"]}
          typeSpeed={40}
          backSpeed={40}
          loop
          className={style.typedText}
        />
        <div className={style.cvContainer}>
          <a href=""  download="../../cv/Maximiliano Cattaneo Cvetic.Cv.pdf" className={style.cv}>
            Descargar Cv{" "}
          </a>
          <MdOutlineFileDownload style={{ color: "white" }} />
        </div>
      </div>
    </section>
  );
}

export default Presentation;
