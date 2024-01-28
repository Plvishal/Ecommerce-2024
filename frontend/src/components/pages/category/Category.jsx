import { useState } from 'react';
import axios from 'axios';

function Category() {
  const [loginUser, setLoginUser] = useState({
    category: '',
  });
  const handleInputChange = (e) => {
    setLoginUser((currUser) => {
      return { ...currUser, [e.target.name]: e.target.value };
    });
  };
  const handleLoginUser = (e) => {
    e.preventDefault();

    axios
      .post('/api/ecommerce/product/bycategory', loginUser)
      .then((result) => {
        console.log(result);
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
        </div>
      </div>
    </>
  );
}

export default Category;
