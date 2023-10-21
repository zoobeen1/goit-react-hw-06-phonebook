import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getContacts } from 'redux/selectors';
import { Box } from '../common';
import { List, ListItem } from './Contacts.styled';
import { Filter } from 'components/Filter';

export function Contacts() {
  const contacts = useSelector(getContacts);
  const [filter, setFilter] = useState('');
  //Управляет фильтром - контроллируемый элемент
  const changeFilter = e => {
    setFilter(e.target.value);
  };
  const getVisibleContacts = () => {
    const lowercaseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowercaseFilter)
    );
  };
  const deleteContact = id => {
    console.log('Delet contact - ', id);
  };

  return (
    <Box>
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} /> {/*filter={filter} */}
      {getVisibleContacts().map(contact => {
        return (
          <List key={contact.id}>
            <ListItem>
              {`${contact.name}:`}
              <p> {contact.phone} </p>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </ListItem>
          </List>
        );
      })}
    </Box>
  );
}
