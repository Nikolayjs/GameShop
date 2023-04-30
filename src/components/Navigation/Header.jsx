import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectIsAuth } from '../../store/slices/auth';
import HeroIcon from '../ui/HeroIcon';
import Input from '../ui/Input';
import Logo from './Logo';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.scss';
import Dropdown from '../ui/Dropdown';
import Search from './Search/Search';

const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdown, setDropdown] = React.useState(false);
  const onClickLogout = () => {
    if (window.confirm('Выйти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
      navigate('/');
    }
  };

  const userLink = (
    <Link
      to={`/user/${userData?._id}`}
      className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-300 hover:text-gray-500 dropdown"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
      Профиль
    </Link>
  );
  const adminLink = (
    <>
      <Link
        to={`/user/${userData?._id}`}
        className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-300 hover:text-gray-500 dropdown"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        Профиль
      </Link>
      <Link
        to={`/admin/${userData?._id}`}
        className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-300 hover:text-gray-500 dropdown"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        Админка
      </Link>
    </>
  );
  return (
    <header className={styles.header}>
      <div className="lg:w-[60%]">
        <Logo />
        {isAuth ? (
          <ul
            className="mt-6 ml-6 items-center gap-3 space-y-6 font-medium md:mt-0 md:flex md:space-y-0 cursor-pointer"
            onClick={() => setDropdown(!dropdown)}
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src={
                    userData.avatarUrl
                      ? userData.avatarUrl
                      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7Mwd5bi-e2DBBlP6F1oZwYOkqKlm4z98Gg&usqp=CAU'
                  }
                  alt=""
                />
                {userData?.isAdmin ? (
                  <Dropdown
                    state={dropdown}
                    onLogout={onClickLogout}
                    link={adminLink}
                    setDropdown={setDropdown}
                  />
                ) : (
                  <Dropdown
                    state={dropdown}
                    onLogout={onClickLogout}
                    link={userLink}
                    setDropdown={setDropdown}
                  />
                )}
              </div>
              <div>
                <div className="text-sm font-medium text-secondary-500">
                  {userData.fullName ? userData.fullName : userData.email}
                </div>
              </div>
            </div>
          </ul>
        ) : (
          <ul className="mt-6 ml-6 items-center gap-3 space-y-6 font-medium md:mt-0 md:flex md:space-y-0">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="h-10 w-10 cursor-pointer" onClick={() => navigate('/login')}>
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7Mwd5bi-e2DBBlP6F1oZwYOkqKlm4z98Gg&usqp=CAU"
                  alt=""
                />
              </div>
              <span
                className="cursor-pointer hover:text-blue-500"
                onClick={() => navigate('/login')}
              >
                Войти
              </span>
            </div>
          </ul>
        )}

        <Search />

        <nav className="fixed inset-x-0 bottom-0 top-14 hidden items-center gap-8 bg-white px-6 text-secondary-700 md:static md:flex md:bg-transparent md:p-0 h-screen md:h-auto">
          <ul className="mt-5 items-center gap-8 space-y-6 font-medium md:mt-0 md:flex md:space-y-0">
            <li>
              <HeroIcon
                name="HeartIcon"
                iconStyle="h-5 w-5 text-white cursor-pointer hover:text-red-500"
              />
            </li>
            <li>
              <HeroIcon
                name="ShoppingBagIcon"
                iconStyle="h-5 w-5 text-white cursor-pointer hover:text-blue-500"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
