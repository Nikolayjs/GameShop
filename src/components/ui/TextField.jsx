import React from 'react';
import styles from './Ui.module.scss';
const TextField = ({
  label,
  placeholder,
  inputId,
  value,
  onChange,
  errors,
  helperText,
  type,
  ref,
  customStyle = '',
}) => {
  if (label) {
    return (
      <div className={styles.textfieldContainer}>
        <div>
          <label htmlFor={inputId} className={errors ? styles.labelError : styles.label}>
            {label}
          </label>
          <input
            type={type ? type : 'text'}
            id={inputId}
            value={value}
            className={errors ? styles.inputError : `${customStyle} ${styles.input}`}
            placeholder={placeholder ? placeholder : label}
            ref={ref}
            onChange={onChange}
          />
          {errors ? <p>{helperText}</p> : ''}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.textfieldContainer}>
        <div>
          <input
            type={type ? type : 'text'}
            id={inputId}
            value={value}
            className={errors ? styles.inputError : `${customStyle} ${styles.input}`}
            placeholder={placeholder}
            ref={ref}
            onChange={onChange}
          />
          {errors ? <p>{helperText}</p> : ''}
        </div>
      </div>
    );
  }
};

export default TextField;
