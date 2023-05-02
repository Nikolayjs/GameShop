import React from 'react';
import HeroIcon from '../ui/HeroIcon';
import Logo from './Logo';
import { Link, useNavigate } from 'react-router-dom';
import { linkGenerator } from '../../utils/LinkGenerator';
import { adminLink, userLink } from '../../router/menuRoutes';
import Search from './Search/Search';

const MobileNav = ({ toggle, setToggle, isAuth, userData }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 md:hidden bg-[#212023]/90 xl:w-[65%] backdrop-blur-sm">
      <div className="flex w-[60%] justify-between p-2">
        <HeroIcon
          name="Bars3Icon"
          iconStyle={`h-6 w-6 ml-5 m-auto cursor-pointer md:hidden`}
          onClick={() => setToggle(!toggle)}
        />
        <Logo />
      </div>
      <div
        className={`w-full min-h-screen absolute  left-0 right-0 backdrop-blur-sm bg-black/80 md:block md:w-auto transition-all ease-in-out duration-300 ${
          !toggle ? '-top-[1500px]' : 'top-0'
        }`}
      >
        <HeroIcon
          name="Bars3Icon"
          iconStyle={`h-6 w-6 ml-5 mt-5 cursor-pointer md:hidden`}
          onClick={() => setToggle(!toggle)}
        />
        <Search customStyle="mt-5 w-[80%] m-auto flex flex-row justify-between" />
        <ul className="flex flex-col mt-10 p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
          {isAuth ? (
            <>
              {userData?.isAdmin ? (
                <>
                  <Link
                    to="/"
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-300 hover:text-gray-500 dropdown"
                    onClick={() => setToggle(false)}
                  >
                    <HeroIcon name="HomeIcon" iconStyle="h-4 w-4" />
                    Главная
                  </Link>
                  {linkGenerator(adminLink, userData._id, () => setToggle(false))}
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-300 hover:text-gray-500 dropdown"
                    onClick={() => setToggle(false)}
                  >
                    <HeroIcon name="HomeIcon" iconStyle="h-4 w-4" />
                    Главная
                  </Link>
                  {linkGenerator(userLink, userData._id, () => setToggle(false))}
                </>
              )}
            </>
          ) : (
            <p className="hover:text-gray-400 cursor-pointer" onClick={() => navigate('/login')}>
              Войти
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
