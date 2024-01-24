import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const navigate = useNavigate();
  const [signUp, setSignup] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    url: '',
  });

  const handleInputChange = (e) => {
    setSignup((currValue) => {
      return { ...currValue, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new Object();
    formData.name = signUp.name;
    formData.email = signUp.email;
    formData.password = signUp.password;
    formData.role = signUp.role;
    formData.profileImg = new Object({
      public_id: 113,
      url: signUp.url,
    });
    axios
      .post('/api/ecommerce/user/signup', formData)
      .then((result) => {
        if (result.data.success) {
          alert('Account created successfully');
          navigate('/login');
        }
      })
      .catch((error) => {
        if (
          error.response.data.error ===
          'ValidationError: name: user name is requires, email: user email is requires, password: Please enter your password, role: `` is not a valid enum value for path `role`., profileImg.url: Path `profileImg.url` is required.'
        ) {
          return alert('All field are required');
        }
        if (
          error.response.data.error ===
          'MongoServerError: E11000 duplicate key error collection: storefleet.users index: email_1 dup key: { email: "vishal@gmail.com" }'
        ) {
          alert('You are already signup');
          navigate('/login');
          return;
        }
        if (error.response.data.error) {
          alert(error.response.data.error);
        }
      });
  };

  return (
    <>
      <div className=" bg-rose-600 h-screen text-white d-flex justify-content-center align-items-center  ">
        <form
          onSubmit={handleSubmit}
          className="d-flex  flex-col w-1/2 m-auto gap-2 border p-2 rounded border-red-700 shadow-xl overflow-hidden "
        >
          <h3 className="text-center"> Signup</h3>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            onChange={handleInputChange}
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            onChange={handleInputChange}
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            onChange={handleInputChange}
          />
          <label htmlFor="url" className="label-control">
            Image URL
          </label>
          <input
            type="text"
            id="url"
            name="url"
            onChange={handleInputChange}
            className="form-control"
          />
          <select
            name="role"
            id="role"
            onChange={handleInputChange}
            className="form-select"
          >
            <option>choose role</option>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
          <button type="submit" className="btn btn-primary w-1/5 m-auto mt-1  ">
            Signup
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
