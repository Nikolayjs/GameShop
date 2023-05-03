import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCategories, fetchGames } from '../store/slices/games';

import Spinner from '../components/ui/Spinner';

import { fetchAuthMe } from '../store/slices/auth';
import PreviewGameCard from '../components/ui/PreviewGameCard';
const Content = () => {
  const dispatch = useDispatch();
  const { games } = useSelector((state) => state.games);
  const user = useSelector((state) => state.auth.data);
  React.useEffect(() => {
    dispatch(fetchGames());
    dispatch(fetchCategories());
    dispatch(fetchAuthMe());
  }, [dispatch]);

  if (games.items.length === 0 || !user) {
    return <Spinner />;
  }

  return <PreviewGameCard games={games} userData={user} id={user._id} />;
};

export default Content;
