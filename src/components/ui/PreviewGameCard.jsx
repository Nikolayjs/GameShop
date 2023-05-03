import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addToCart, removeFromCart } from '../../service/transactionService';
import HeroIcon from './HeroIcon';
import styles from './Ui.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../store/slices/userGames';
const PreviewGameCard = ({ games, userData, id }) => {
  const [inCart, setInCart] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.userGames.cart.items);

  React.useEffect(() => {
    dispatch(fetchCart());
  }, [inCart]);

  console.log(userCart);

  const addInCartHandler = async (userId, gameId) => {
    if (userCart.includes(gameId)) {
      await removeFromCart(userId, gameId);
      setInCart(!inCart);
    } else {
      await addToCart(userId, gameId);
      setInCart(!inCart);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h1>Игры</h1>
      <div className={styles.wrapper}>
        {games.items.map((game) => (
          <div key={game._id} className={styles.gameCard}>
            <img
              src={game.image}
              alt={`${game.title} - game`}
              onClick={() => navigate(`games/${game._id}`)}
            />
            <div className="p-4">
              <p>
                <time>{game.release_date}</time>
              </p>
              <h3>
                <Link to={`games/${game._id}`}>{game.title}</Link>
              </h3>
              <div className={styles.gameCategory}>
                {game.category.map((cat) => (
                  <span key={uuidv4()}>{cat}</span>
                ))}
              </div>
              <div className={styles.cardFooter}>
                <span>{`${game.price}₽`}</span>
                {userCart.includes(game._id) ? (
                  <HeroIcon
                    name="SquaresPlusIcon"
                    isSolid
                    onClick={() => addInCartHandler(id, game._id)}
                  />
                ) : (
                  <HeroIcon name="SquaresPlusIcon" onClick={() => addInCartHandler(id, game._id)} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewGameCard;
