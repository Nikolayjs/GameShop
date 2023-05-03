import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Ui.module.scss';
const Button = ({ link, customStyle, isDisable, type, onClick, children }) => {
  return link ? (
    <Link to={link}>
      <button
        disabled={isDisable}
        type={type}
        onClick={onClick}
        className={`${customStyle} ${styles.btn}`}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      disabled={isDisable}
      type={type}
      onClick={onClick}
      className={`${customStyle} ${styles.btn}`}
    >
      {children}
    </button>
  );
};

export default Button;
