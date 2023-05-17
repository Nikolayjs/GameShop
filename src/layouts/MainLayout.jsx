import React from 'react';
import Header from '../components/Navigation/Header';
import Content from './Content';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../store/slices/userGames';
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
      setTimeout(() => {}, 100);
      setInCart(!inCart);
    }
  };

  if (userCart) {
    return (
      <>
        <Header cart={userCart.length} />
        <Content addToCart={addInCartHandler} userCart={userCart} />
      </>
    );
  }
  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default MainLayout;
