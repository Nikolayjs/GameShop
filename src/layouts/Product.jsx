import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../components/ui/Button';
import MainLayout from './MainLayout';

const Product = ({
  _id,
  title,
  image,
  contentImage,
  description,
  price,
  isLoading,
  isSingleProduct,
}) => {
  const [modal, setModal] = React.useState(false);
  const [pic, setPic] = React.useState('');

  const handleModal = (img) => {
    setModal(!modal);
    setPic(img);
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="mt-[100px] flex flex-col m-auto justify-center items-center text-center mb-20">
      <h1 className="text-3xl">{title}</h1>
      <div className="max-w-3xl mt-6 bg-black/20 rounded-md">
        <div className="p-4">
          <img className="rounded-md" src={image} />
        </div>
        <p className="p-4">{description}</p>
        <h3 className="text-xl">Скриншоты</h3>
        <div className="flex">
          {contentImage.map((image) => (
            <img
              key={uuidv4()}
              className="p-4 max-w-sm justify-between cursor-zoom-in"
              src={image}
              onClick={() => handleModal(image)}
            />
          ))}
        </div>
        <div className="flex p-5 justify-around">
          <span>Цена: {price}₽</span>
          <Button>Купить</Button>
        </div>
      </div>
      {/* Modal */}
      <div className={`h-full w-full ${modal ? '' : 'hidden'}`}>
        <div>
          <div className="fixed inset-0 z-10 bg-black/50"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
            <div className="mx-auto overflow-hidden rounded-lg sm:w-full sm:max-w-6xl">
              <div className="relative p-6">
                <div className="mt-2 text-sm">
                  <img className="cursor-zoom-out" src={pic} onClick={() => setModal(false)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
