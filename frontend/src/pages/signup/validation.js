import * as yup from 'yup';
const validation = {
  name: yup
    .string()
    .min(4, 'name should be minimun 4 letlers ')
    .max(30, 'name should be maximum 30 letters ')
    .trim()
    .required('name is required'),
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
