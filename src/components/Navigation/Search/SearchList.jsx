import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Search.module.scss';
const SearchList = ({ games = [], reset }) => {
  const navigate = useNavigate();
  const resetHandler = (id) => {
    navigate(`/games/${id}`);
    reset('');
  };
  return (
    <div className={styles.list}>
      {games.map((game) => (
        <a className="cursor-pointer" onClick={() => resetHandler(game._id)}>
          {game.title}
        </a>
      ))}
    </div>
  );
};

export default SearchList;
