import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import style from "./footer.module.css";

function Footer() {
  return (
    <div className={style.footerContainer}>
      <footer className={style.footer}>
        <div>
          <p className={style.desing}>
            © 2023 Maximiliano Cattaneo Cvetic. Todos los derechos reservados.
          </p>
        </div>
        <div>
          <p>
            Diseñado por{" "}
            <a
              href="https://github.com/MaxiCattaneoCvetic"
              target="_blank"
              rel="noopener noreferrer"
							className={style.a}
            >
              Maximiliano Cattaneo Cvetic
            </a>
          </p>
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
      </footer>
    </div>
  );
}

export default Footer;
