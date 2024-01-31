import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditProducts() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState({});
  useEffect(() => {
    axios
      .get('/api/ecommerce/product/details/' + id)
      .then((result) => {
        setProducts(result.data.productDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    const newData = Object.assign({}, products, { [name]: value });
    setProducts(newData);
    const latestData = Object.assign({}, edit, { [name]: value });
    setEdit(latestData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put('/api/ecommerce/product/update/' + id, edit)
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          alert('Product update successfully done ');
          navigate('/login/admin-dashboard/all-products-info');
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(edit);
  };
  return (
    <>
      <div className="w-full h-full">
        <div className="relative top-20 w-full h-full">
          <div className="w-1/2 m-auto relative top-5">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={products.name}
                className="form-control"
              />
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                cols="20"
                rows="5"
                value={products.description}
                className="form-control"
              ></textarea>
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={products.price}
                className="form-control"
                onChange={handleInputChange}
              />
              <label htmlFor="stock" className="form-label">
                Stock
              </label>
              <input
                type="number"
                name="stock"
                id="stock"
                value={products.stock}
                className="form-control"
                onChange={handleInputChange}
              />
              <label htmlFor="category">Category</label>
              <select
                name="category"
                id="category"
                className="form-select"
                onChange={handleInputChange}
              >
                <option defaultChecked>
                  {products.category}&nbsp;Our current category
                </option>
                <option value="mobile">mobile</option>
                <option value="shoes">shoes</option>
                <option value="clothing">clothing</option>
                <option value="electronics">Electronics</option>
                <option value="health & beauty">Health & Beauty</option>
                <option value="sports & outdoors">Sports & Outdoors</option>
                <option value="toys & games">Toys & Games</option>
                <option value="books & media">Books & Media</option>
                <option value="electrical appliances">
                  Electrical Appliances
                </option>
                <option value="furniture">Furniture</option>
              </select>
              <button className="btn btn-info" type="submit">
                Edit Products
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProducts;
