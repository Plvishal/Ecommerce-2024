import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get('/api/ecommerce/user/logout')
      .then((result) => {
        localStorage.removeItem('valid');

        navigate('/login');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="bg-rose-700  w-full h-screen p-2 ">
        <div className="d-flex position-relative top-24  gap-2  bg-rose-700  h-4/5">
          <div className="d-flex flex-col border w-1/5 rounded-3xl">
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start p-4"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="/login/admin-dashboard"
                  className="nav-link text-white px-0 align-middle"
                >
                  Profile
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/login/admin-dashboard/get-all-user"
                  className="nav-link text-white px-0 align-middle"
                >
                  Get All Users
                </Link>
              </li>

              <li className="w-100" onClick={handleLogout}>
                <Link className="nav-link text-white px-0 align-middle">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full border p-3 h-11/12 rounded-3xl">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
