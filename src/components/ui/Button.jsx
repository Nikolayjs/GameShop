import React from 'react';
import { Link } from 'react-router-dom';
const Button = ({ link, customStyle, isDisable, type, onClick, children }) => {
  return link ? (
    <Link to={link}>
      <button
        disabled={isDisable}
        type={type}
        onClick={onClick}
        className={`${customStyle} rounded-lg border border-violet-700 bg-violet-800 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-violet-600 hover:bg-violet-600 focus:ring focus:ring-violet-500 disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300`}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      disabled={isDisable}
      type={type}
      onClick={onClick}
      className={`${customStyle} rounded-lg border border-violet-700 bg-violet-800 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-violet-600 hover:bg-violet-600 focus:ring focus:ring-violet-500 disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300`}
    >
      {children}
    </button>
  );
};

export default Button;
