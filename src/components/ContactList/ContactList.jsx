import { ContactContainer, DeteleBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleTasks } from 'redux/selectors';

import { MdDeleteForever } from 'react-icons/md';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleTasks);

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ContactContainer>
      <ul>
        {contacts.map(({ name, phone, _id: id }) => (
          <li key={id}>
            {name}: {phone}
            <DeteleBtn onClick={() => handleDelete(id)}>
              <MdDeleteForever />
            </DeteleBtn>
          </li>
        ))}
      </ul>
    </ContactContainer>
  );
};
