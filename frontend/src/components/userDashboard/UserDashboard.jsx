import { Link, Outlet } from 'react-router-dom';

function UserDashboard() {
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
                  to="/login/user-dashboard"
                  className="nav-link text-white px-0 align-middle"
                >
                  Profile
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/login/user-dashboard/get-user-details"
                  className="nav-link text-white px-0 align-middle"
                >
                  Get Details
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/login/user-dashboard/update-profile"
                  className="nav-link text-white px-0 align-middle"
                >
                  Upadate Profile
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/login/user-dashboard/update-password"
                  className="nav-link text-white px-0 align-middle"
                >
                  Update Password
                </Link>
              </li>
              <li className="w-100">
                <Link to="" className="nav-link text-white px-0 align-middle">
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

export default UserDashboard;
