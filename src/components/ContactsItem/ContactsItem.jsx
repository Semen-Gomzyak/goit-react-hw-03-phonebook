import { IconButton } from 'components/IconButton/IconButton.styled';
import PropTypes from 'prop-types';
import { ContactInfo, ContactInformation } from './ContactsItem.styled';
import { ReactComponent as DeleteIcon } from '../svg/delete.svg';

export const ContactsItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;
  return (
    <ContactInfo key={id}>
      <ContactInformation>
        - {name}: {number}
      </ContactInformation>
      <IconButton type="button" onClick={() => onDeleteContact(id)}>
        <DeleteIcon width="25px" height="25px" />
      </IconButton>
    </ContactInfo>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
