import { Component } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { TitleBig, PrimaryTitles } from './Title/Title';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts === null) {
      this.setState({ contacts: [] });
      console.log("here");
    }

      if (parsedContacts && parsedContacts.length === 0) {
        toast.warning(`You don't have contacts, please add a new contact`);
      }

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextСontacts = this.state.contacts;
    const prevСontacts = prevState.contacts;

    if (nextСontacts !== prevСontacts) {
      localStorage.setItem('contacts', JSON.stringify(nextСontacts));
    }
  }

  formSubmitHandler = data => {
    const { name, number } = data;
    const { contacts } = this.state;

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'display',
        }}
      >
        <TitleBig>Phonebook</TitleBig>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <PrimaryTitles>Contacts</PrimaryTitles>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
        <ToastContainer autoClose={4000} />
      </div>
    );
  }
}
