import axios from 'axios';
import { useState } from 'react';

function UpdatePassword() {
  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassowrd: '',
  });
  const [error, setError] = useState('');
  const handleInputChange = (e) => {
    setPassword((currPass) => {
      return { ...currPass, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put('/api/ecommerce/user/password/update', password)
      .then((result) => {
        console.log(result);

        setPassword('');
        alert('Update done');
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };
  return (
    <>
      <div className=" h-4/5 text-white d-flex justify-content-center align-items-center ">
        <form
          className="d-flex  flex-col w-3/2 m-auto gap-2 border p-2 rounded border-red-700 shadow-xl overflow-hidden "
          onSubmit={handleSubmit}
        >
          <h4 className="text-center">Update Password</h4>
          <div className="shadow-xl p-2"> {error}</div>
          <label htmlFor="currentPassword" className="form-label">
            Current Password
          </label>
          <input
            type="text"
            id="currentPassword"
            name="currentPassword"
            className="form-control"
            onChange={handleInputChange}
          />

          <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
          <input
            type="text"
            id="newPassword"
            name="newPassword"
            className="form-control"
            onChange={handleInputChange}
          />
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="text"
            id="confirmPasssword"
            name="confirmPassword"
            className="form-control"
            onChange={handleInputChange}
          />

          <button type="submit" className="btn btn-outline-primary  ">
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdatePassword;
