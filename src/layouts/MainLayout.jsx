import React from 'react';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Sidebar from '../components/Navigation/Sidebar';
import Content from './Content';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Content />
      <Sidebar />
      <Footer />
    </>
  );
};

export default MainLayout;
