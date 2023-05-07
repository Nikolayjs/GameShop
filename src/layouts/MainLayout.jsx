import React, { Suspense } from 'react';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Sidebar from '../components/Navigation/Sidebar';
import Content from './Content';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../store/slices/userGames';
import { fetchAuthMe } from '../store/slices/auth';
import { addToCart, removeFromCart } from '../service/transactionService';

const MainLayout = () => {
  const dispatch = useDispatch();
  const [inCart, setInCart] = React.useState(false);
  const userCart = useSelector((state) => state.userGames.cart.items);
  React.useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch, inCart]);

  const addInCartHandler = async (userId, gameId) => {
    if (userCart.includes(gameId)) {
      await removeFromCart(userId, gameId);
      setInCart(!inCart);
    } else {
      await addToCart(userId, gameId);
      setInCart(!inCart);
    }
  };

  if (userCart) {
    return (
      <>
        <Header />
        <Content addToCart={addInCartHandler} userCart={userCart} />
      </>
    );
  }
  return <></>;
};

export default MainLayout;
