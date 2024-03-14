import style from "./presentation.module.css";
import { ReactTyped } from "react-typed";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";
import { useState } from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

function Presentation() {
  const [isDownload, setIsDownload] = useState(false);

  const handleDownload = () => {
    setIsDownload(true);
  };

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
            href="/Maximiliano_Cattaneo_Cvetic_CV.pdf"
            download="Maximiliano_Cattaneo_Cvetic_CV.pdf"
            className={style.cv}
            style={{ textDecoration: "underline var(--colorPrincipal)" }}
            onClick={handleDownload}
          >
            Descargar CV
          </a>
          {isDownload ? (
            <MdDownloadDone
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
              style={{
                color: "white",
                cursor: "pointer",
                border: "2px solid var(--colorPrincipal)",
                padding: "5px",
                borderRadius: "5px",
              }}
            />
          )}
        </div>
        <div className={style.redes}>
          <a
            href="https://github.com/MaxiCattaneoCvetic"
            target="_blank"
            rel="noopener noreferrer"
            className={style.ab}
          >
            <FaGithubAlt />
          </a>
          <a
            href="https://www.linkedin.com/in/mcvetic/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.ab}
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
