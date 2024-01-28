import axios from 'axios';
import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

function AddReviews() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [review, setReview] = useState({
    rating: '',
    comment: '',
  });
  const handleInputChange = (e) => {
    setReview((currUser) => {
      return { ...currUser, [e.target.name]: e.target.value };
    });
  };
  const handleLoginUser = (e) => {
    e.preventDefault();
    console.log(review);

    axios
      .put('/api/ecommerce/product/rate/' + id, review)
      .then((result) => {
        console.log(result);
        if (result.statusText) {
          alert(result.statusText);
          navigate('/products/details/' + id);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.error === 'login to access this route!') {
          alert(error.response.data.error);
          navigate('/login');
        }
        if (error.response.data.error === `rating can't be empty`) {
          alert(error.response.data.error);
        }
      });
  };
  return (
    <>
      <div className="bg-rose-700 h-full w-full">
        <div className="bg-rose-700 h-full w-full relative top-20">
          <div className=" bg-rose-600 h-screen text-white d-flex justify-content-center align-items-center ">
            <form
              className="d-flex  flex-col w-1/3  m-auto gap-2 border p-2 rounded border-red-700 shadow-xl overflow-hidden "
              onSubmit={handleLoginUser}
            >
              <h3 className="text-center">Add Reviews</h3>
              <label htmlFor="rating" className="form-label">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                className="form-control"
                min={1}
                max={5}
                onChange={handleInputChange}
              />
              <label htmlFor="comment" className="form-label">
                Comment
              </label>
              <textarea
                name="comment"
                id="comment"
                cols="20"
                rows="5"
                onChange={handleInputChange}
                className="form-control"
                placeholder="write something here......"
              ></textarea>

              <button
                type="submit"
                className="btn btn-primary w-1/2 m-auto mt-1  "
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddReviews;
