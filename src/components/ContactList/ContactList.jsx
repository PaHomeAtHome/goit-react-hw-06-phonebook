import { useSelector } from 'react-redux';
import { ContactListComponent } from 'components/ContactListComponent/ContactListComponent';

export const ContactList = ({ contacts }) => {
  const filter = useSelector(state => state.filter.filter);
  return (
    <ul>
      {contacts && filter === ''
        ? contacts.map(contact => (
            <ContactListComponent key={contact.id} contact={contact} />
          ))
        : contacts &&
          contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(contact => (
              <ContactListComponent key={contact.id} contact={contact} />
            ))}
    </ul>
  );
};
