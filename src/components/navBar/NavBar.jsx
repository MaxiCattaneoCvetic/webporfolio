import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { Divide as Hamburger } from "hamburger-react";
import style from "./navbar.module.css";
import "../../generalcss.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className={style.nav}>
        <FaCode style={{ fontSize: "2rem", color: "blue" }} />
        <div
          className={style.hamburger_div}
          style={{ color: "white !important" }}
        >
          <Hamburger
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            color="white"
            easing="ease-in"
            style={{ color: "white !important" }}
          />
        </div>
        <ul className={`${style.ulNavbar} ${isMenuOpen ? style.open : ""}`}>
          <li>
            <a
              className="decorationOff"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              href="/"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              className="decorationOff"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              href="#proyect"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              className="decorationOff"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              href="#skills"
            >
              Tecnologias
            </a>
          </li>
          <li>
            <a
              className="decorationOff"
              href="#contact"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Contacto
            </a>
          </li>
          <li>
            <a
              className="decorationOff"
              href="https://dutsiland.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              ~ Dutsiland ~
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
