import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  let [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('/api/ecommerce/product/products')
      .then((result) => {
        // console.log(result);
        setProducts(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="bg-rose-700 w-full h-full  ">
        <div className="relative top-24  bg-rose-700 ">
          <div className="relative lg:w-1/4 flex justify-end  m-auto lg:left-96  sm:left-0 ">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              className="form-control"
              placeholder="just type category here.."
            />
          </div>
          <div className="h-full p-2 d-flex  flex-wrap lg:w-full md:w-full  sm:w-full gap-2 justify-center">
            {products
              .filter((i) => {
                return search.toLowerCase() === ' '
                  ? i
                  : i.category.toLowerCase().includes(search);
              })
              .map((p) => {
                return (
                  <div
                    className="card lg:w-1/5 md:w-full sm:w-full"
                    key={p._id}
                  >
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
                    <div className="card-body ">
                      <h4 className="card-title ">
                        {`${p.name.toString().substring(0, 40)}...`}
                      </h4>
                      <h6 className="card-text ">{p.price}</h6>
                      <p className="card-subtitle text-justify ">
                        {p.description.toString().substring(0, 20)}...
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
      </div>
    </>
  );
}

export default Home;
