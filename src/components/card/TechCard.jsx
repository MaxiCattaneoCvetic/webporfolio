"use client"

import { useState } from "react"
import { Modal } from "react-responsive-modal"  // Importa el modal de react-responsive-modal
import "react-responsive-modal/styles.css"  // Importa los estilos predeterminados del modal
import styles from "./TechCard.module.css"

export default function TechCard({ images, title, details, moreDetails, technologies, codeUrl, deployUrl, videoUrl }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [showMoreDetails, setShowMoreDetails] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)  // Estado para controlar la visibilidad del modal

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleMoreDetails = () => {
    setShowMoreDetails(!showMoreDetails)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {images.length > 1 && (
          <button className={`${styles.imageButton} ${styles.prevButton}`} onClick={prevImage}>
            &#8249;
          </button>
        )}
        <img
          src={images[currentImage] || "/placeholder.svg"}
          alt={`Project image ${currentImage + 1}`}
          className={styles.image}
        />
        {images.length > 1 && (
          <button className={`${styles.imageButton} ${styles.nextButton}`} onClick={nextImage}>
            &#8250;
          </button>
        )}
        {images.length > 1 && (
          <div className={styles.imageCounter}>
            {currentImage + 1} / {images.length}
          </div>
        )}
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.details}>{details}</p>
      <button
        className={styles.moreDetailsButton}
        onClick={() => {
          handleMoreDetails();
          openModal();
        }}
      >
        {showMoreDetails ? "Less Details " : "More Details "}
        <span className={styles.arrow}>{showMoreDetails ? "▲" : "▼"}</span>
      </button>



      <div className={styles.technologies}>
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={styles.tech}
            style={{
              "--hoverColor": tech.color, 
            }}
          >
            {tech.name}

          </span>
        ))}
      </div>
      <div className={styles.links} >
        {codeUrl ? (
          <a href={codeUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <span className={styles.linkIcon}>&#60;/&#62;</span>
            <span >Code</span>
          </a>) : (<h5 className={styles.repoPrivate}>El repo es privado, contactame!</h5>
        )}
        {deployUrl ? (
          <a href={deployUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <span className={styles.linkIcon}>🌐</span>
            <span>Demo</span>
          </a>) : (<h3></h3>)
        }
        {videoUrl && (
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <span className={styles.linkIcon}>▶</span>
            <span>Video</span>
          </a>
        )}
      </div>


      <Modal
        center
        open={isModalOpen}
        onClose={closeModal}
        styles={{
          modal: {
            borderRadius: '10px',
            padding: '20px',
            fontFamily: "'Arial', sans-serif",
          },
        }}
      >
        <div>
          <h2
            style={{
              textAlign: 'center',
              color: '#333',
              fontSize: '24px',
              marginBottom: '20px',
            }}
          >
            {title}
          </h2>
          <div
            style={{ lineHeight: '1.6', color: '#555', fontSize: '16px' }}
          >
            <ul style={{ listStyle: 'none', paddingLeft: '20px' }}>
              {moreDetails.split('\n').map((line, idx) => {
                const isEmojiLine = /^[\p{Emoji}]/u.test(line.trim());

                return isEmojiLine ? (
                  <li key={idx} style={{ marginBottom: '10px' }}>
                    {line.trim()}
                  </li>
                ) : (
                  <p key={idx} style={{ marginBottom: '15px' }}>
                    {line.trim()}
                  </p>
                );
              })}
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  )
}
