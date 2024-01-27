import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('/api/ecommerce/product/products')
      .then((result) => {
        console.log(result.data);
        setProducts(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="bg-rose-700 w-full h-full  ">
        <div className="relative top-20  bg-rose-700 h-full p-2 d-flex  flex-wrap lg:w-full md:w-full  sm:w-full gap-2 justify-center">
          {products.map((p) => {
            return (
              <div className="card lg:w-1/5 md:w-full sm:w-full " key={p._id}>
                {p.images.map((i) => (
                  <img
                    src={i.url}
                    className="card-img-top"
                    style={{
                      height: '15rem',
                      padding: '0.3rem',
                      borderRadius: '10px',
                    }}
                    alt="error"
                    key={i.public_id}
                  />
                ))}
                <div className="card-body">
                  <h4 className="card-title ">
                    {p.name.toString().substring(0, 10)}
                  </h4>
                  <h6 className="card-text ">{p.price}</h6>
                  <p className="card-subtitle text-justify">
                    {p.description.toString().substring(0, 10)}...
                  </p>
                  <div className="d-flex justify-content-between">
                    <Link
                      className="text-decoration-none btn btn-info mt-2"
                      to={`/products/details/` + p._id}
                    >
                      Details
                    </Link>
                    <Link className="text-decoration-none btn btn-success mt-2">
                      Add To Card
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
