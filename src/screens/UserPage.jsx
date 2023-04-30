import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Navigation/Header';
import UserLayout from '../layouts/UserLayout';

const UserPage = () => {
  const userData = useSelector((state) => state.auth.data);
  return (
    <>
      <Header />
      <div className="mt-32">
        <UserLayout data={userData} />
      </div>
    </>
  );
};

export default UserPage;
