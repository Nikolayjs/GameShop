import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchCategories, fetchGames } from '../store/slices/games';
import { v4 as uuidv4 } from 'uuid';
const Content = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { games } = useSelector((state) => state.games);
  // Добавить фильтр и поиск

  React.useEffect(() => {
    dispatch(fetchGames());
    dispatch(fetchCategories());
  }, [dispatch]);

  if (games.items.length === 0) {
    return <h1 className="mt-[200px] text-3xl text-center">Loading</h1>;
  }
  return (
    <div className="w-[90%] lg:max-w-[60%] m-auto mt-[100px] flex flex-wrap gap-4 justify-around bg-black/20 rounded-md p-4">
      {games.items.map((game) => (
        <div
          key={game._id}
          className="max-w-sm lg:max-w-lg overflow-hidden rounded-lg bg-zinc-800 shadow mt-2 transition-all ease-in-out hover:scale-105"
        >
          <img
            src={game.image}
            className="aspect-video w-full object-cover cursor-pointer"
            alt={`${game.title} - image`}
            onClick={() => navigate(`games/${game._id}`)}
          />
          <div className="p-4">
            <p className="mb-1 text-sm text-gray-400">
              <time>{game.release_date}</time>
            </p>
            <h3 className="text-xl font-medium text-gray-200 cursor-pointer">
              <Link to={`games/${game._id}`}>{game.title}</Link>
            </h3>
            <p className="mt-1 text-gray-500 text-base">{game.description.slice(0, 150)}...</p>
            <div className="mt-4 flex gap-2">
              {game.category.map((cat) => (
                <span
                  key={uuidv4()}
                  className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600"
                >
                  {cat}
                </span>
              ))}
            </div>
            <p className="mt-2">{`${game.price}₽`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
