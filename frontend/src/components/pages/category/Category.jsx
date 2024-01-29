import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Category() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState({
    category: '',
  });
  const handleInputChange = (e) => {
    setCategory((currUser) => {
      return { ...currUser, [e.target.name]: e.target.value };
    });
  };
  const handleLoginUser = (e) => {
    e.preventDefault();

    axios
      .post('/api/ecommerce/product/bycategory', category)
      .then((result) => {
        console.log(result);
        setProduct(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className=" bg-rose-600 h-full w-full">
        <div className="relative top-20 p-2 bg-rose-600 h-full w-full">
          <div className="d-flex w-full">
            <form onSubmit={handleLoginUser} className="d-flex   m-auto">
              <input
                type="text"
                id="category"
                name="category"
                className="form-control search  "
                onChange={handleInputChange}
              />

              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
          <h3 className="text-center mt-10 text-white text-justify">
            All Products
          </h3>
          <hr className="text-white" />
          <div className=" h-full p-2 d-flex  flex-wrap lg:w-full md:w-full  sm:w-full gap-2 justify-center">
            {product.map((p) => {
              return (
                <div className="card lg:w-1/5 md:w-full sm:w-full " key={p._id}>
                  <img
                    src={p.images[0].url}
                    className="card-img-top"
                    style={{
                      height: '15rem',
                      padding: '0.3rem',
                      borderRadius: '10px',
                    }}
                    alt="error"
                  />

                  <div className="card-body">
                    <h4 className="card-title ">
                      {p.name.toString().substring(0, 30)}...
                    </h4>
                    <h6 className="card-text "> &#8377;{p.price}</h6>
                    <p className="card-subtitle text-justify">
                      {p.description.toString().substring(0, 40)}...
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

export default Category;
