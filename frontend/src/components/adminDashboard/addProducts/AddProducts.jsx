import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
function AddProducts() {
  const navigate = useNavigate();
  const [products, setproducts] = useState({
    name: '',
    description: '',
    price: '',
    url: '',
    stock: '',
    category: '',
  });

  const handleInputChange = (e) => {
    setproducts((currValue) => {
      return { ...currValue, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new Object();
    formData.name = products.name;
    formData.description = products.description;
    formData.price = products.price;
    formData.images = new Array({
      public_id: uuid(),
      url: products.url,
    });
    formData.stock = products.stock;
    formData.category = products.category;
    axios
      .post('/api/ecommerce/product/add', formData)
      .then((result) => {
        console.log(result.statusText);
        if (result.data.success) {
          alert(result.statusText);
          navigate('/login/admin-dashboard/add-products');
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="text-white d-flex justify-content-center align-items-center  ">
        <form
          onSubmit={handleSubmit}
          className="d-flex  flex-col w-1/2 m-auto gap-2 border p-1 rounded border-red-700 shadow-xl overflow-hidden "
        >
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            onChange={handleInputChange}
          />
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="form-control"
            onChange={handleInputChange}
          />
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            min={1}
            className="form-control"
            onChange={handleInputChange}
          />
          <label htmlFor="url" className="label-control">
            Image URL
          </label>
          <input
            type="text"
            id="url"
            name="url"
            onChange={handleInputChange}
            className="form-control"
          />
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            min={1}
            className="form-control"
            onChange={handleInputChange}
          />
          <select
            name="category"
            id="category"
            onChange={handleInputChange}
            className="form-select"
          >
            <option>choose category</option>
            <option value="Mobile">Mobile</option>
            <option value="Electronics">Electronics</option>
          </select>
          <button
            type="submit"
            className="btn btn-primary w-1/5 m-auto mt-1 mb-2 "
          >
            Add Products
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProducts;
