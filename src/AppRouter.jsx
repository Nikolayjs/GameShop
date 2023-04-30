import { useSelector } from 'react-redux';
import { selectIsAdmin, selectIsAuth } from './store/slices/auth';
import { Route, Routes } from 'react-router-dom';
import { adminRoutes, privateRoutes, publicRoutes } from './router/routes';
import Home from './screens/Home';
import ProductPage from './screens/ProductPage';

const AppRouter = () => {
  const isAuth = useSelector(selectIsAuth);
  const isAdmin = useSelector(selectIsAdmin);

  if (isAdmin) {
    return (
      <Routes>
        {adminRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    );
  }
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
