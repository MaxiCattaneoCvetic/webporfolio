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
          technologies={project.technologies.map((tech) => tech)}
          codeUrl={project.url[0].codigo}
          deployUrl={project.url[0].isReady ? project.url[0].deploy : undefined}
          videoUrl={project.url[0].isVideo ? project.url[0].video : undefined}
          onMoreDetails={() => onOpenModal(index)}
        />
      ))}

    </section>
  )
}

