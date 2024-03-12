import style from "./presentation.module.css";
import { ReactTyped } from "react-typed";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";
import { useState } from "react";

function Presentation() {
  const [isDownload, setIsDownload] = useState(false);
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
          <a
            href="../../cv/Maximiliano Cattaneo Cvetic.Cv.pdf"
            download="Maximiliano_Cattaneo_Cvetic_CV.pdf"
            className={style.cv}
          >
            Descargar CV{" "}
          </a>
          <a
            href="../../cv/Maximiliano Cattaneo Cvetic.Cv.pdf"
            download="Maximiliano_Cattaneo_Cvetic_CV.pdf"
            className={style.cv}
          >
            {isDownload ? (
              <MdDownloadDone
                download="Maximiliano_Cattaneo_Cvetic_CV.pdf"
                style={{
                  color: "white",
                  cursor: "pointer",
                  border: "2px solid var(--colorPrincipal)",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              />
            ) : (
              <MdOutlineFileDownload
                download="Maximiliano_Cattaneo_Cvetic_CV.pdf"
                onClick={() => setIsDownload(true)}
                style={{
                  color: "white",
                  cursor: "pointer",
                  border: "2px solid var(--colorPrincipal)",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              />
            )}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
