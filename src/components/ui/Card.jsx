import React from 'react';
import styles from './Ui.module.scss';
const Card = ({ title, image, backgroundImage, children, onClick, tinyImage }) => {
  if (image) {
    return (
      <div className={styles.card}>
        <img src={image} alt={`${title}-card`} />
        <div>{children}</div>
      </div>
    );
  } else if (backgroundImage) {
    return (
      <div className={styles.cardWithBg}>
        <div>
          <img src={backgroundImage} alt={`${title}-bg`} />
        </div>
        <div className={styles.carCap}></div>
        <div className={styles.content}>{children}</div>
      </div>
    );
  } else {
    return (
      <div className={styles.simpleCard}>
        <ul>
          <li>
            <div className="p-4 flex-1">{children}</div>
            <div>
              <img src={tinyImage} alt={title} />
            </div>
          </li>
        </ul>
      </div>
    );
  }
};

export default Card;
