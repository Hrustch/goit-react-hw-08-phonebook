import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactSlice';


export const PhonebookForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch()
  const {contacts} = useSelector(state =>(state))

  const addNewContact = (sentContact) => {
    const isExist = contacts.find(
      (contact) => contact.name === sentContact.name || contact.number === sentContact.number
    );
    if (isExist) {
      alert('Such contact already exists!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: sentContact.name,
      number: sentContact.number,
    };
    dispatch(addContact(newContact))
  };

  
  const onSubmit = (e) => {
    e.preventDefault();
    addNewContact(this.state);
    setName('')
    setNumber('');
  }

  
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input
            id="input_name"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="iput_name">
          Number
          <input
            id="input_tell"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    </>
  );

}