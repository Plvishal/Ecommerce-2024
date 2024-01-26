// import React from 'react'

import { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const products = await axios.get('/api/ecommerce/product/products');
      setProducts(products.data);
    })();
  }, []);
  return (
    <>
      <div className="home_container">
        {products.map((product) => {
          // console.log(product);
          return (
            <div key={product._id} className="card_container">
              <div className="img_container">
                <img src={product.images[0].url} alt="image" />
              </div>
              <div>
                <p>{product.name}</p>
                <p>Rs.{product.price}</p>
                <p>rating: {product.rating}</p>
              </div>
              <div className='btn'>
                <button>Add To Card</button>
                <button>Details</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
