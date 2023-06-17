import { object, string } from 'yup';
import { ErrorMessage, Formik } from 'formik';
import { FormWrapper, Input } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

let userSchema = object({
  email: string().email('Not valid email').required('Enter a email'),
  password: string().required('Enter a password'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    dispatch(logIn(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <label htmlFor="email">
          Email
          <Input type="email" name="email" placeholder="cat@email.com" />
          <ErrorMessage name="email" />
        </label>

        <label htmlFor="password">
          Password
          <Input type="password" name="password" placeholder="password" />
          <ErrorMessage name="password" />
        </label>

        <button type="submit">Submit</button>
      </FormWrapper>
    </Formik>
  );
};
