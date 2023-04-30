import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Navigation/Header';
import AdminLayout from '../layouts/AdminLayout';

const AdminPanel = () => {
  const userData = useSelector((state) => state.auth.data);
  return (
    <>
      <Header />
      <AdminLayout />
    </>
  );
};

export default AdminPanel;
