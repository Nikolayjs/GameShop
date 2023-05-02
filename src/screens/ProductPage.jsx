import React from 'react';
import Product from '../layouts/Product';
import { useParams } from 'react-router-dom';
import axios from '../service/axios';
import Header from '../components/Navigation/Header';

const ProductPage = () => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = useParams();
  React.useEffect(() => {
    axios
      .get(`/games/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [id]);

  if (isLoading) {
    return <Product isLoading={isLoading} />;
  }
  return (
    <>
      <Header />
      <Product
        id={data._id}
        title={data.title}
        description={data.description}
        price={data.price}
        image={data.image}
        contentImage={data.content_images}
        release={data.release_date}
        category={data.category}
      />
    </>
  );
};

export default ProductPage;
