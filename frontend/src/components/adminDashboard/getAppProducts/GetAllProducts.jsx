import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function GetAllProducts() {
  const navigate = useNavigate();
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
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete('/api/ecommerce/product/delete/' + id)
      .then((result) => {
        console.log(result);
        if (result.statusText === 'OK') {
          alert('Product Deleted Successfully');
          navigate('/login/admin-dashboard');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="overflow-scroll h-full">
        <table className="table text-center ">
          <thead className="table-head">
            <tr>
              <th className="bg-primary-dark  p-4 text-center"> Prduct Name</th>
              <th className="bg-primary-dark  p-4 text-center">Category</th>
              <th className="bg-primary-dark  p-4 text-center">Price</th>
              <th className="bg-primary-dark  p-4 text-center">Stock</th>
              <th className="bg-primary-dark  p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-primary-light text-primary-dark overflow-scroll">
            {products.map((p) => {
              return (
                <tr key={p._id}>
                  <td>{p.name.toString().substring(0, 10)}..</td>
                  <td>{p.category}</td>
                  <td>&#x20b9; {p.price}</td>
                  <td>{p.stock}</td>
                  <td>
                    <Link
                      className="btn btn-primary me-2"
                      to={`/products/details/` + p._id}
                    >
                      Details
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(p._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GetAllProducts;
