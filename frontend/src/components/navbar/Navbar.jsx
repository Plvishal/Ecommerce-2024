import { useContext, useEffect, useState } from 'react';
import './navbar.css';
import { Link, Outlet } from 'react-router-dom';
import UserContext from '../../context/userContext';
function Navbar() {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };
  const { user, admin } = useContext(UserContext);

  let per = localStorage.getItem('valid');

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">HavenStore</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={state ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/category" className="nav-links">
              Category
            </Link>
          </li>

          {per === null ? (
            <>
              <li>
                <Link to="/signup" className="nav-links">
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-links">
                  Login
                </Link>
              </li>
            </>
          ) : null}
          {user && (
            <li>
              <Link to="/login/user-dashboard" className="nav-links">
                User Account
              </Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/login/admin-dashboard" className="nav-links">
                Admin Account
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
