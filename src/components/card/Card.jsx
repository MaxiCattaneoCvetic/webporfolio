/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import styles from "./card.module.css";
import projectsData from "../../utils/projects";
import { FcNext, FcPrevious } from "react-icons/fc";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function Card() {
  const [open, setOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const onOpenModal = (index) => {
    setSelectedProjectIndex(index);
    setOpen(true);
  };

  const onCloseModal = () => setOpen(false);

  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    Array(projectsData.length).fill(0)
  );

  const handlePrevButtonClick = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const updatedIndexes = [...prevIndexes];
      updatedIndexes[index] =
        updatedIndexes[index] === 0
          ? projectsData[index].image.length - 1
          : updatedIndexes[index] - 1;
      return updatedIndexes;
    });
  };

  const handleNextButtonClick = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const updatedIndexes = [...prevIndexes];
      updatedIndexes[index] =
        updatedIndexes[index] === projectsData[index].image.length - 1
          ? 0
          : updatedIndexes[index] + 1;
      return updatedIndexes;
    });
  };

  return (
    <div className={styles.cardContainer}>
      {projectsData.map((project, index) => (
        <div className={styles.card} key={project.id}>
          <div className={styles.imageContainer}>
            <img
              src={project.image[currentImageIndexes[index]]}
              alt={project.title}
              style={{ width: "500px", height: "auto" }}
              className={styles.projectImage}
            />
            <div className={styles.imageButtons}>
              <button
                className={styles.prevButton}
                onClick={() => handlePrevButtonClick(index)}
              >
                <FcPrevious
                  style={{ fontWeight: "bolder", fontSize: "2rem" }}
                />
              </button>
              <button
                className={styles.nextButton}
                onClick={() => handleNextButtonClick(index)}
              >
                <FcNext style={{ fontWeight: "bolder", fontSize: "2rem" }} />
              </button>
            </div>
          </div>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <div className={styles.projectDetails}>
            <p style={{ maxHeight: "300px", overflowY: "auto" }}>
              {project.details}
            </p>
            <p
              style={{ textAlign: "center", cursor: "pointer", color: "blue" }}
              onClick={() => onOpenModal(index)}
            >
              leer mas..
            </p>
            <Modal  center styles={{ modal: { borderRadius: "10px" } }} open={open && selectedProjectIndex === index} onClose={onCloseModal}>
              <div>
                <p key={project.id}>
                  <h2 style={{ textAlign: "center" }}>{project.title}</h2>
                  {project.moredetails}
                </p>
              </div>
            </Modal>
          </div>
          <div className={styles.technologies}>
            <br/>
            <hr />
            <p style={{ padding: "10px" }}>Tecnologias:</p>
            <ul className={styles.technologyList}>
              {project.technologies.map((technology, index) => (
                <li style={{ color: technology.color }} key={index}>
                  {technology.name}
                </li>
              ))}
            </ul>
          </div>
          {project.url[0].isReady ? (
            <div className={styles.buttons}>
              <button className={styles.viewButton}>
                <a
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                  href={project.url[0].deploy}
                >
                  Ver
                </a>{" "}
              </button>
              <button className={styles.codeButton}>
                <a
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                  href={project.url[0].codigo}
                >
                  Código
                </a>
              </button>
            </div>
          ) : (
            <button disabled={true} className={styles.viewButton}>
              <a
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "no-drop",
                }}
              >
                Proyecto en desarrollo
              </a>{" "}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
