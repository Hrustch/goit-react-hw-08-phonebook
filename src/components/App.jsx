import React from 'react';

import { Section } from './Section';
import { PhonebookForm } from './PhonebookForm';
import { PhonebookContacts } from './PhonebookContacts';
import { PhonebookFilter } from './PhonebookFilter';
import { useSelector } from 'react-redux';

const App = () => {
  const { contacts } = useSelector(state => state);

  return (
    <div>
      <Section title="Phonebook">
        <PhonebookForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <PhonebookFilter />
            <PhonebookContacts />{' '}
          </>
        ) : (
          <p>No contacts found yet. Please add a new contact!</p>
        )}
      </Section>
    </div>
  );
};

export default App;
