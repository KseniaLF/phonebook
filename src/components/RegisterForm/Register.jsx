import { object, string } from 'yup';
import { ErrorMessage, Formik } from 'formik';
import { FormWrapper, Input } from 'components/LoginForm/LoginForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

let userSchema = object({
  name: string().required('Enter a name'),
  email: string().email('Not valid email').required('Enter a email'),
  password: string().required('Enter a password'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    dispatch(register(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <label htmlFor="name">
          Name
          <Input type="name" name="name" placeholder="Cat" />
          <ErrorMessage name="name" />
        </label>

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
