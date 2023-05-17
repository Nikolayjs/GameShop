import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../components/ui/Button';
import Spinner from '../components/ui/Spinner';
import { useSelector } from 'react-redux';
import { addToCart } from '../service/transactionService';
import { useNavigate } from 'react-router-dom';
import styles from './Layouts.module.scss';

const Product = ({ id, title, image, contentImage, description, price, isLoading }) => {
  const userData = useSelector((state) => state.auth.data);
  const navigate = useNavigate();
  const [modal, setModal] = React.useState(false);
  const [pic, setPic] = React.useState('');
  const handleModal = (img) => {
    setModal(!modal);
    setPic(img);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.productContainer}>
      <h1>{title}</h1>
      <div className={styles.productCard}>
        <div className={styles.productImage}>
          <img src={image} alt={`game-${title}`} />
        </div>
        <p>{description}</p>
        <h3>Скриншоты</h3>
        <div className={styles.images}>
          {contentImage.map((image) => (
            <img
              key={uuidv4()}
              src={image}
              alt={`game-${title}`}
              onClick={() => handleModal(image)}
            />
          ))}
        </div>
        <div className={styles.btnContainer}>
          <span>Цена: {price}₽</span>
          {userData ? (
            <Button onClick={() => addToCart(userData._id, id)}>Купить</Button>
          ) : (
            <Button onClick={() => navigate('/login')}>Войти</Button>
          )}
        </div>
      </div>
      {/* Modal */}
      <div className={`${styles.modal} ${modal ? '' : 'hidden'}`}>
        <div>
          <div className={styles.modalBg}></div>
          <div className={styles.modalContent}>
            <img
              className="cursor-zoom-out"
              src={pic}
              alt={`game-${title}`}
              onClick={() => setModal(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
