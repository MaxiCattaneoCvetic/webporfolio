import React, { useState } from "react";
import styles from "./technologies.module.css";
import ReactSimplyCarousel from "react-simply-carousel";
import { FcNext, FcPrevious } from "react-icons/fc";
import technologyImages from "../../utils/technologyImages.js";

const Technologies = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeSlideIndex2, setActiveSlideIndex2] = useState(0);

  const btnStyle = {
    alignSelf: "center",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
    height: 30,
    lineHeight: 1,
    width: 30,
    
  };

  return (
    <>
    <h2 className={styles.titlex}>Tecnologias:</h2>
      <div className={styles.tecnoMainContainer}>
        <div className={styles.container}>
          <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex2}
            onRequestChange={setActiveSlideIndex2}
            itemsToShow={100}
            itemsToScroll={100}
            autoplay={true}
            infinite={true}
            autoplayDelay={1000}
            centerMode={false}
            speed={4000}
            autoplayDirection="forward"
            forwardBtnProps={{
              style: btnStyle,
              children: (
                <span>
                  <FcNext />
                </span>
              ),
            }}
            backwardBtnProps={{
              style: btnStyle,
              children: (
                <span>
                  <FcPrevious />
                </span>
              ),
            }}
            responsiveProps={[
              {
                itemsToShow: 3,
                itemsToScroll: 0,
                minWidth: 800,
              },
            ]}
          >
            {technologyImages[0].back.map((imageUrl, index) => (
              <>
                <div className={styles.imageCarrouselContainer}>
                  <a>
                    <img
                      key={index}
                      src={imageUrl.url}
                      className={styles.technologyImage}
                      alt={`Tecnología ${index}`}
                    />
                    <p>{imageUrl.name}</p>
                  </a>
                </div>
              </>
            ))}
          </ReactSimplyCarousel>
        </div>

        <div className={styles.container}>
          <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex2}
            onRequestChange={setActiveSlideIndex2}
            itemsToShow={100}
            itemsToScroll={100}
            autoplay={true}
            infinite={true}
            autoplayDelay={1000}
            centerMode={false}
            speed={4000}
            autoplayDirection="backward"
            forwardBtnProps={{
              style: btnStyle,
              children: (
                <span>
                  <FcNext />
                </span>
              ),
            }}
            backwardBtnProps={{
              style: btnStyle,
              children: (
                <span>
                  <FcPrevious />
                </span>
              ),
            }}
            responsiveProps={[
              {
                itemsToShow: 10,
                itemsToScroll: 0,
                minWidth: 800,
              },
            ]}
          >
            {technologyImages[0].front.map((imageUrl, index) => (
              <>
                <div className={styles.imageCarrouselContainer}>
                  <a>
                    <img
                      key={index}
                      src={imageUrl.url}
                      className={styles.technologyImage}
                      alt={`Tecnología ${index}`}
                    />
                    <p>{imageUrl.name}</p>
                  </a>
                </div>
              </>
            ))}
          </ReactSimplyCarousel>
        </div>
      </div>
    </>
  );
};

export default Technologies;
