import AddForm from '../components/ui/AddForm';
import AdminPanel from '../screens/AdminPanel';
import Home from '../screens/Home';
import Login from '../screens/Login';
import ProductPage from '../screens/ProductPage';
import Register from '../screens/Register';
import UserPage from '../screens/UserPage';

export const publicRoutes = [
  { path: '/', element: Home, url: '/', name: 'Главная страница' },
  { path: '/login', element: Login, url: '/login', name: 'Логин' },
  { path: '/register', element: Register, url: '/register', name: 'Регистрация' },
  { path: '/games/:id', element: ProductPage, url: '/games/:id', name: 'Описание' },
];

export const privateRoutes = [
  { path: '/', element: Home, url: '/', name: 'Главная страница' },
  { path: '/games/:id', element: ProductPage, url: '/games/:id', name: 'Описание' },
  { path: '/user/:id', element: UserPage, url: '/user/:id', name: 'Пользователь' },
];

export const adminRoutes = [
  { path: '/', element: Home, url: '/', name: 'Главная страница' },
  { path: '/games/:id', element: ProductPage, url: '/games/:id', name: 'Описание' },
  { path: '/user/:id', element: UserPage, url: '/user/:id', name: 'Пользователь' },
  { path: '/admin/:id', element: AdminPanel, url: '/admin/:id', name: 'Админка' },
  { path: '/games/:id/edit', element: AdminPanel, url: '/games/:id/edit', name: 'Редактировать' },
];
