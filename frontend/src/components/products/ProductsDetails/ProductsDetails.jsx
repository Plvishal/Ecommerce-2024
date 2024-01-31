import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ProductsDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productsDetail, setProductsDetail] = useState({});
  const [image, setImages] = useState();
  const [review, setReview] = useState([]);
  useEffect(() => {
    axios
      .get('/api/ecommerce/product/details/' + id)
      .then((result) => {
        setProductsDetail(result.data.productDetails);
        setImages(result.data.productDetails.images[0].url);
        setReview(result.data.productDetails.reviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleReviewDelete = (r_id, p_id) => {
    console.log(
      `/api/ecommerce/product/review/delete?productId=${p_id}&reviewId=${r_id}`
    );
    axios
      .delete(
        `/api/ecommerce/product/review/delete?productId=${p_id}&reviewId=${r_id}`
      )
      .then((result) => {
        console.log(result);
        if (result.data.msg) {
          console.log(result.data.msg);
          alert(result.data.msg);
          navigate(`/products/details/` + result.data.product._id);
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
        if (error.response.data.error === 'login to access this route!') {
          alert(error.response.data.error);
          navigate('/login');
        }
      });
  };

  return (
    <>
      <div className="bg-rose-700 w-full h-full">
        <div className="relative top-20 w-full h-full p-4 bg-rose-300">
          <h3 className="text-justify text-center mt-2 mb-3 w-11/12 m-auto text-wrap">
            Details About ::{productsDetail.name}
          </h3>
          <div className="d-flex gap-3 border p-3 h-full ">
            <div className="border p-2 h-full m-auto">
              <img
                src={image}
                alt="error"
                style={{
                  width: '100%',
                  margin: 'auto',
                  height: '18rem',
                  borderRadius: '15px',
                  boxShadow: ' 0 0 5px 1px rgba(0,0,0,0.2)',
                }}
              />
            </div>
            <div className="border p-3 w-full card-body ">
              {/* <h4 className="card-title w-3/5 text-justify">
                {productsDetail.name}
              </h4> */}
              <p className="card-subtitle w-full text-lg text-justify mt-3">
                <span className="text-bold">
                  <u>Description:</u>
                </span>
                &nbsp;&nbsp;&nbsp;
                {productsDetail.description}
              </p>
              <h5 className="card-title mt-2">
                Price:&nbsp; &#8377;{productsDetail.price}
              </h5>
              <div className="relative top-2 d-flex justify-content-between  overflow-hidden">
                <div className="btn btn-danger">
                  In Stocks: {productsDetail.stock}
                </div>
                <div className="btn btn-info">
                  Rating: {productsDetail.rating}stars
                </div>
                <div>
                  <Link
                    className="text-decoration-none btn btn-primary"
                    to={`/products/add-reviews/` + productsDetail._id}
                  >
                    Add Reviews
                  </Link>
                </div>
                <div>
                  <button className="btn btn-success">Add To Card</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-center">Top Reviews By User</h5>
            <div className="d-flex">
              {review.map((rew) => {
                return (
                  <div
                    className="card"
                    key={rew._id}
                    style={{
                      width: '25%',
                      margin: 'auto',
                    }}
                  >
                    <div className="card-body">
                      <h4 className="card-title">Name: {rew.name}</h4>
                      <p className="card-subtitle text-justify">
                        Comment: {rew.comment}
                      </p>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <button className="btn btn-info">
                          {rew.rating}stars
                        </button>
                        <Link
                          className="text-decoration-none btn btn-danger "
                          onClick={() =>
                            handleReviewDelete(rew._id, productsDetail._id)
                          }
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsDetails;
