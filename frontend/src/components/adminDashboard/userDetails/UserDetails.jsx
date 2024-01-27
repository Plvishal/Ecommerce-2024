import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  useEffect(() => {
    axios
      .get('/api/ecommerce/user/admin/details/' + id)
      .then((result) => {
        setDetails(result.data.userDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = () => {
    axios
      .delete('/api/ecommerce/user/admin/delete/' + id)
      .then((result) => {
        console.log(result.data);
        alert(result.data.msg);
        navigate('/login/admin-dashboard/get-all-user');
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.msg);
      });
  };

  return (
    <>
      <div>
        <div>
          <div className="w-full h-full">
            <img
              src={details.profileImg}
              alt="userError"
              className="w-auto h-44 m-auto rounded-xl border p-1"
            />
          </div>
          <div>
            <ul
              className="nav nav-pills  mb-sm-auto mb-0 align-items-start p-4 "
              id="menu"
            >
              <li className="w-1/5 m-auto btn btn-primary">
                <Link
                  to="/login/admin-dashboard/get-all-user"
                  className="nav-link text-white px-0 align-middle"
                >
                  Back TO All Users List
                </Link>
              </li>
              <li onClick={handleDelete}>
                <button className="w-full  btn btn-primary p-2">Delete</button>
              </li>
            </ul>
          </div>
          <hr className="text-white" />
          <div className="text-white">
            <h4>
              <strong>Name:&nbsp;&nbsp;</strong>
              {details.name}
            </h4>
            <h4>
              <strong>Email ID:&nbsp;&nbsp;</strong>
              {details.email}
            </h4>
            <h4>
              <strong>Role:&nbsp;&nbsp;</strong>
              {details.role}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
