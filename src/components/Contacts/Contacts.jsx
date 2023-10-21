import { useSelector, useDispatch } from 'react-redux';
// Импортируем action generator
import { deleteContact } from 'redux/contactsSlice';
import { useState } from 'react';
import { getContacts } from 'redux/selectors';
import { Box } from '../common';
import { List, ListItem } from './Contacts.styled';
import { Filter } from 'components/Filter';

export function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const deletContact = id => dispatch(deleteContact(id));
  // const deleteContact = id => {
  //   console.log('Delet contact - ', id);
  // };
  //Управляет фильтром - контроллируемый элемент
  //----------------
  const [filter, setFilter] = useState('');
  const changeFilter = e => {
    setFilter(e.target.value);
  };
  const getVisibleContacts = () => {
    const lowercaseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowercaseFilter)
    );
  };
  //-----------------

  return (
    <Box>
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} />
      {getVisibleContacts().map(contact => {
        return (
          <List key={contact.id}>
            <ListItem>
              {`${contact.name}:`}
              <p> {contact.phone} </p>
              <button onClick={() => deletContact(contact.id)}>Delete</button>
            </ListItem>
          </List>
        );
      })}
    </Box>
  );
}
