import React from "react";
import styles from "./Styles/Card.module.scss";

function CardCharacter({ name, status, origin, location, image, species }) {
  return (
    <div className={styles.cardContainer}>
      <div>
        <img src={`${image}`} alt="icon" />
      </div>
      <section>
        <div className={styles.infoName}>
          <h2>{name}</h2>
          <div className={styles.infoStatus}>
            <span>
              {status}-{species}
            </span>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <span className={styles.colorSpan}>Last know location</span>
          <small>{location.name}</small>
        </div>
        <div className={styles.infoContainer}>
          <span className={styles.colorSpan}>First seen in:</span>
          <small>{origin.name}</small>
        </div>
      </section>
    </div>
  );
}

export default CardCharacter;
