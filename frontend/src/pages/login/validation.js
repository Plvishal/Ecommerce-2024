import * as yup from 'yup';
const validation = {
  email: yup
    .string()
    .email()
    .required('email is required')
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/),

  password: yup
    .string()
    .required('password are required')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
};

export { validation };
