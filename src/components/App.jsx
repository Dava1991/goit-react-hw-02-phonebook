import { Component } from 'react';
import { nanoid } from 'nanoid'
import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import {Filter} from './Filter/Filter'


export class App extends Component {
 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
}

  formSubmitHandler = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };
    const { name } = data;
    const { contacts } = this.state;
    const findName = (contact) => contact.name === name;

    if (contacts.some(findName)) {
  alert(`${name} is already in contacts.`);
  return
    } else {
      this.setState(prev => (
        prev.contacts.push(newContact)
      ));
    };

  };
    handleFilter = e => {
      this.setState({
      filter: e.currentTarget.value,
      });
};
  
  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el) => el.id !== id),
    }))
  };

  render() {

    const filtrContacts = this.state.contacts
      .filter(contact => contact.name.toLowerCase()
      .includes(this.state.filter.toLowerCase()))
  
    return (
      <>
        <Title text="Phonebook" />
        <ContactForm
          onSubmit={this.formSubmitHandler}
        />
        <Title text="Contacts" />
        <Filter
          handleFilter={this.handleFilter}
          value={this.state.filter}
        />
        <ContactList
          contacts={filtrContacts}
          deleteContact={this.deleteContact}
        />
      </>
    )
  };
};