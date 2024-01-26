// Render Prop
// import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { validation } from './validation';
import './signup.css';
import axios from 'axios';

const Signup = () => (
  // const [usersignup,setUserSignup]=useState([]);
  <div className="signup_container">
    <h1>Signup</h1>
    <Formik
      initialValues={{ name: '', email: '', password: '', role: 'user' }}
      validationSchema={yup.object(validation)}
      onSubmit={async (values, { setSubmitting }) => {
        await axios.post('/api/ecommerce/user/signup', {
          name: values.name,
          email: values.email,
          password: values.password,
          role: values.role,
        });
        alert('Signup successfully done. Now you can login');
        window.location.href = '/login';

        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="input_field_container">
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className="inputField"
            />
            <ErrorMessage name="name" component="div" />
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
            <Field as="select" name="role" className="inputField">
              <option value="user">user</option>
              <option value="admin">admin</option>
            </Field>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn_submit"
            >
              Signup
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default Signup;
