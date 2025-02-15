"use client"

import Modal from "react-responsive-modal"
import TechCard from "./TechCard"
import { useState } from "react"
import projects from "../../utils/projects"
import styles from "./ProjectCards.module.css"


export default function ProjectCards() {
    const [open, setOpen] = useState(false)
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null)
  
    const onOpenModal = (index) => {
      setSelectedProjectIndex(index)
      setOpen(true)
    }
  
    const onCloseModal = () => setOpen(false)
  
    return (
      <section className={styles.cardContainer}>
        {projects.map((project, index) => (
          <TechCard
            key={project.id}
            images={project.image}
            title={project.title}
            details={project.details}
            moreDetails={project.moredetails}
            technologies={project.technologies.map((tech) => tech.name)}
            codeUrl={project.url[0].codigo}
            deployUrl={project.url[0].isReady ? project.url[0].deploy : undefined}
            videoUrl={project.url[0].isVideo ? project.url[0].video : undefined}
            onMoreDetails={() => onOpenModal(index)}
          />
        ))}
  
        {/* <Modal
        
          center
          styles={{
            modal: {
              borderRadius: "10px",
              padding: "20px",
              fontFamily: "'Arial', sans-serif",
              maxWidth: "90vw",
              width: "600px",
            },
          }}
          open={open && selectedProjectIndex !== null}
          onClose={onCloseModal}
        >
          {selectedProjectIndex !== null && (
            <div>
              <h2 className={styles.modalTitle}>{projects[selectedProjectIndex].title}</h2>
              <div className={styles.modalContent}>
                <ul className={styles.modalList}>
                  {projects[selectedProjectIndex].moredetails.split("\n").map((line, idx) => {
                    const isEmojiLine = /^[\p{Emoji}]/u.test(line.trim())
                    return isEmojiLine ? <li key={idx}>{line.trim()}</li> : <p key={idx}>{line.trim()}</p>
                  })}
                </ul>
              </div>
            </div>
          )}
        </Modal> */}
      </section>
    )
  }

