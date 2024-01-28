import { useState } from 'react';
import axios from 'axios';

function Category() {
  const [category, setCategory] = useState({
    category: '',
  });
  const handleInputChange = (e) => {
    setCategory((curr) => {
      return { ...curr, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(category);
    axios
      .get('/api/ecommerce/product/by-category', category)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="bg-pink-700 w-full h-full">
        <div className="bg-rose-700 w-full h-full relative top-20 p-2">
          <div className="d-flex align-items-center justify-content-center w-1/5 m-auto">
            <form onSubmit={handleSubmit}>
              <input
                className="form-control "
                type="text"
                id="category"
                name="category"
                onChange={handleInputChange}
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="d-flex"></div>
        </div>
      </div>
    </>
  );
}

export default Category;
