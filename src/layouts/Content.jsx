import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCategories, fetchGames } from '../store/slices/games';

import Spinner from '../components/ui/Spinner';

import PreviewGameCard from '../components/ui/PreviewGameCard';
const Content = ({ addToCart, userCart }) => {
  const dispatch = useDispatch();
  const { games } = useSelector((state) => state.games);
  const user = useSelector((state) => state.auth.data);
  React.useEffect(() => {
    dispatch(fetchGames());
    dispatch(fetchCategories());
  }, [dispatch]);

  if (games.items.length === 0) {
    return <Spinner />;
  }

  if (games.items.length > 0 && !user) {
    return <PreviewGameCard games={games} common />;
  }
  return (
    <PreviewGameCard games={games} userData={user} addToCart={addToCart} userCart={userCart} />
  );
};

export default Content;
