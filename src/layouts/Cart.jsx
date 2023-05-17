import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeroIcon from '../components/ui/HeroIcon';
import { removeFromCart } from '../service/transactionService';
import { fetchGames } from '../store/slices/games';
import { fetchCart } from '../store/slices/userGames';
import { getCart } from '../utils/getCart';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.userGames.cart.items);
  const games = useSelector((state) => state.games.games.items);
  const user = useSelector((state) => state.auth.data);
  const [userCart, setUserCart] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const removeCart = (userId, gameId) => {
    setTimeout(() => {
      setIsLoading(true);
    }, 100);
    removeFromCart(userId, gameId);
  };

  React.useEffect(() => {
    dispatch(fetchGames());
    dispatch(fetchCart());
    setUserCart(getCart(cart, games));
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [isLoading]);

  return (
    <div className="mt-[100px] w-[90%] xl:max-w-[65%] justify-around bg-black/20 rounded-md p-4 m-auto">
      <h1>Корзина</h1>
      <div className="mt-10 mb-5">
        {userCart.map((cart) => (
          <div
            key={cart._id}
            className="flex gap-3 justify-between items-center bg-gray-400/10 mt-2 p-3 rounded-md"
          >
            <img className="w-56 rounded-xl flex-2" src={cart.image} />
            <h3 className="flex-1">{cart.title}</h3>
            <span className="flex-1">{cart.price} ₽</span>
            <HeroIcon name="XMarkIcon" onClick={() => removeCart(user._id, cart._id)} />
          </div>
        ))}
      </div>
      <span className="ml-2">
        Итого: {userCart?.reduce((acc, current) => acc + current.price, 0)}
      </span>
    </div>
  );
};

export default Cart;
