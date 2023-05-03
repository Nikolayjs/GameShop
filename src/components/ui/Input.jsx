import React from 'react';
import HeroIcon from './HeroIcon';
import styles from './Ui.module.scss';
const Input = ({ placeholder, icon }) => {
  return (
    <div className={styles.inputContainer}>
      <div>
        <div className="relative">
          <div className={styles.iconContainer}>{icon ? <HeroIcon name={icon} /> : ''}</div>
          <input
            type="text"
            id="search"
            className={`${icon ? 'pl-10' : ''}`}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
