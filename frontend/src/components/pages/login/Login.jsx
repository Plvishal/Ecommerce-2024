import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
    role: '',
  });
  const handleInputChange = (e) => {
    setLoginUser((currUser) => {
      return { ...currUser, [e.target.name]: e.target.value };
    });
  };
  const handleLoginUser = (e) => {
    e.preventDefault();
    console.log(loginUser);
    axios
      .post('/api/ecommerce/user/login', loginUser)
      .then((result) => {
        if (result.data.user.role === 'user') {
          navigate('/login/user-dashboard');
        }
        if (result.data.user.role === 'admin') {
          navigate('/login/admin-dashboard');
        }
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response.data.error ===
          'user not found! register yourself now!!'
        ) {
          alert(error.response.data.error);
          navigate('/signup');
          return;
        }
        if (error.response.data.error) {
          alert(error.response.data.error);
        }
      });
  };

  return (
    <>
      <div className=" bg-rose-600 h-screen text-white d-flex justify-content-center align-items-center ">
        <form
          className="d-flex  flex-col w-3/2 m-auto gap-2 border p-2 rounded border-red-700 shadow-xl overflow-hidden "
          onSubmit={handleLoginUser}
        >
          <h3 className="text-center"> Login</h3>
          <label htmlFor="email" className="label-control">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            onChange={handleInputChange}
          />
          <label htmlFor="password" className="label-control">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            onChange={handleInputChange}
          />
          <select
            name="role"
            id="role"
            className="form-select"
            onChange={handleInputChange}
          >
            <option>select your role</option>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
          <button type="submit" className="btn btn-primary w-1/2 m-auto mt-1  ">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
