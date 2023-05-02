import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Search.module.scss';
const SearchList = ({ games = [], reset }) => {
  const navigate = useNavigate();
  const resetHandler = (id) => {
    navigate(`/games/${id}`);
    reset('');
  };
  return (
    <div className={styles.list}>
      {games.length > 0 ? (
        <>
          {games.map((game) => (
            <span key={game._id} className="cursor-pointer" onClick={() => resetHandler(game._id)}>
              {game.title}
            </span>
          ))}
        </>
      ) : (
        <p className="p-2">Ничего не найдено</p>
      )}
    </div>
  );
};

export default SearchList;
