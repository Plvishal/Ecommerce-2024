import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('/api/ecommerce/product/products')
      .then((result) => {
        console.log(result);
        setProducts(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="mt-20">Home</div>
    </>
  );
}

export default Home;
