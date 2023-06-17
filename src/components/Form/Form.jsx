import { Formik } from 'formik';
import { object, string } from 'yup';

import { FormikForm, Input, Errorform } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const initialValues = {
  name: '',
  number: '+',
};

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
let Schema = object({
  name: string().max(20).required('Enter a name'),
  number: string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Enter a number'),
});

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);

    const findDuplicateContact = contacts.find(item => {
      return item.name === value.name;
    });

    findDuplicateContact
      ? alert(`${value.name} is already in contacts.`)
      : dispatch(addContact(value));

    resetForm();
    document.activeElement.blur();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Schema}
      onSubmit={handleSubmit}
    >
      <FormikForm>
        <label htmlFor="name">
          <p>Name</p>
          <Input id="name" name="name" type="text" />
          <Errorform name="name" component="div" />
        </label>

        <label htmlFor="number">
          <p>Phone</p>
          <Input
            id="number"
            name="number"
            type="tel"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <Errorform name="number" component="div" />
        </label>

        <button type="submit">Add contact</button>
      </FormikForm>
    </Formik>
  );
};
