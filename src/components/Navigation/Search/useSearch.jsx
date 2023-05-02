import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import { useEffect } from 'react';
import { fetchGames, fetchGamesWithSearch } from '../../../store/slices/games';

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGamesWithSearch(searchTerm));
  }, [dispatch, debouncedSearch]);
  const data = useSelector((state) => state.games.search);
  const { isSuccess } = useQuery(['search query list', debouncedSearch], () => data, {
    select: ({ data }) => data,
    enabled: !!debouncedSearch,
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return { isSuccess, handleSearch, data, searchTerm, setSearchTerm };
};

export default useSearch;
