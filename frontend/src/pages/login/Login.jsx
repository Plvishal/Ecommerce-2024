// Render Prop
// import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { validation } from './validation';
import axios from 'axios';
import './login.css';
import { useEffect, useState, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const Login = () => {
  const [loginUser, setLoginUser] = useState([]);
  const { setUser, setAdmin } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const result = await axios.post('/api/ecommerce/user/login', loginUser);
      console.log(result);
      alert('Login successfully done :)');
      if (result.data.user.role === 'user') {
        setUser(result.data);
        navigate('/login/user/profile');
      }

      if (result.data.user.role === 'admin') {
        setAdmin(result.data);
        navigate('/login/admin/profile');
      }
    })();
  });
  return (
    <>
      <div className="signup_container">
        <h1>Login</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={yup.object(validation)}
          onSubmit={async (values, { setSubmitting }) => {
            setLoginUser(values);

            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="input_field_container">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email Id"
                  className="inputField"
                />
                <ErrorMessage name="email" component="div" />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="inputField"
                />
                <ErrorMessage name="password" component="div" />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn_submit"
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Outlet />
    </>
  );
};

export default Login;
