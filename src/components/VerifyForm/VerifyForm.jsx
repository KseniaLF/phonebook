import { object, string } from 'yup';
import { ErrorMessage, Formik } from 'formik';
import { FormWrapper, Input } from 'components/LoginForm/LoginForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

let emailSchema = object({
  email: string().email('Not valid email').required('Enter a email'),
});

export const VerifyForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    dispatch(register(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={emailSchema}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <label htmlFor="email">
          Email
          <Input type="email" name="email" placeholder="cat@email.com" />
          <ErrorMessage name="email" />
        </label>

        <button type="submit">Submit</button>
      </FormWrapper>
    </Formik>
  );
};
