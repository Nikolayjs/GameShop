import React from 'react';
import { useDispatch } from 'react-redux';
import AppRouter from './AppRouter';
import { fetchAuthMe } from './store/slices/auth';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);
  return <AppRouter />;
}

export default App;
