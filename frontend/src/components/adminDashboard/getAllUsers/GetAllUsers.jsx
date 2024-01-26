import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function GetAllUsers() {
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    axios
      .get('/api/ecommerce/user/admin/allusers')
      .then((result) => {
        setAllUser(result.data.allUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-full h-full">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">EmailId</th>
              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((u) => {
              return (
                <tr key={u._id}>
                  <td>{u.name}</td>
                  <td>
                    <img
                      src={u.profileImg.url}
                      alt="error"
                      className=" w-1/3 h-20 rounded-full p-1"
                    />
                  </td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <Link
                      className="btn btn-info btn-sm me-2"
                      to={`/login/admin-dashboard/details/` + u._id}
                    >
                      Details
                    </Link>
                    <button className="btn btn-danger">Delete</button>
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

export default GetAllUsers;
