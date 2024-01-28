import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductsDetails() {
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
  return (
    <>
      <div className="bg-rose-700 w-full h-full">
        <div className="relative top-20 w-full h-full p-4 bg-rose-300">
          <div className="d-flex gap-3 border p-3 h-full ">
            <div className="border p-2 h-96 m-auto">
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
            <div className="border p-3 w-full card-body">
              <h4 className="card-title">{productsDetail.name}</h4>
              <p className="card-subtitle w-3/5 text-lg text-justify mt-3">
                {productsDetail.description}
              </p>
              <h5 className="card-title mt-2">
                Price:&nbsp; &#8377;{productsDetail.price}
              </h5>
              <div className="relative top-28 d-flex justify-content-between ">
                <div className="btn btn-danger">
                  In Stocks: {productsDetail.stock}
                </div>
                <div className="btn btn-info">
                  Rating: {productsDetail.rating}stars
                </div>
                <div>
                  <Link
                    className="text-decoration-none btn btn-primary"
                    to={`/products/reviews/` + productsDetail._id}
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
                      <button className="btn btn-info mt-3">
                        {rew.rating}stars
                      </button>
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
