import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contactsOperations';


export const PhonebookContacts = () => {
  const dispatch = useDispatch()
  const {contacts, filter} = useSelector(state =>(state.contacts))


  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch])


  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContactById = (id) => {
    dispatch(deleteContact(id))
  };

  return (
    <ul>
        {getFilteredContacts().map((contact)=>{
        return <li key={contact.id}>{contact.name}: {contact.number}<button onClick={()=>{deleteContactById(contact.id)}}>x</button></li>        
        })}
    </ul>
  );
};
