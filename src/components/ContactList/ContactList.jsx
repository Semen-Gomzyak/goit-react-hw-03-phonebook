import { ContactsList } from './ContactList.styled';
import PropTypes from 'prop-types';
import { ContactsItem } from '../ContactsItem/ContactsItem';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactsList>
    {contacts.map(({ id, name, number }) => (
      <ContactsItem
        key={id}
        contact={{ id, name, number }}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ContactsList>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
