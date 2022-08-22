import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import Container from './Container/Container';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {contacts && contacts.length > 0 && <ContactList contacts={contacts} />}
    </Container>
  );
}
