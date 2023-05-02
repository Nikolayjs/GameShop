import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectIsAuth } from '../../store/slices/auth';
import HeroIcon from '../ui/HeroIcon';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import styles from './Navigation.module.scss';
import Dropdown from '../ui/Dropdown';
import Search from './Search/Search';
import { linkGenerator } from '../../utils/LinkGenerator';
import { adminLink, userLink } from '../../router/menuRoutes';
import MobileNav from './MobileNav';

const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdown, setDropdown] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  const onClickLogout = () => {
    if (window.confirm('Выйти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
      navigate('/');
    }
  };

  return (
    <header>
      <MobileNav
        toggle={toggle}
        setToggle={setToggle}
        isAuth={isAuth}
        userData={userData}
        navigate={navigate}
      />
      <div className={styles.header}>
        <div className={styles.container}>
          <Logo />
          {isAuth ? (
            <div className={styles.dropdown} onClick={() => setDropdown(!dropdown)}>
              <div className={styles.dropdownContainer}>
                <div className="h-10 w-10">
                  <img
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
                      link={linkGenerator(adminLink, userData._id)}
                      setDropdown={setDropdown}
                    />
                  ) : (
                    <Dropdown
                      state={dropdown}
                      onLogout={onClickLogout}
                      link={linkGenerator(userLink, userData._id)}
                      setDropdown={setDropdown}
                    />
                  )}
                </div>
                <div>
                  <p>{userData.fullName ? userData.fullName : userData.email}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.dropdown}>
              <div className={styles.dropdownContainer}>
                <div className="h-10 w-10 cursor-pointer" onClick={() => navigate('/login')}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7Mwd5bi-e2DBBlP6F1oZwYOkqKlm4z98Gg&usqp=CAU"
                    alt=""
                  />
                </div>
                <p className="hover:text-gray-400" onClick={() => navigate('/login')}>
                  Войти
                </p>
              </div>
            </div>
          )}
          <Search />
          <nav className={styles.iconBar}>
            <ul>
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
      </div>
    </header>
  );
};

export default Header;
