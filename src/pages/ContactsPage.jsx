import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>

      <Form />

      <h2>Contacts</h2>

      <Filter />

      <ContactList />
      {isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
};
export default ContactsPage;
