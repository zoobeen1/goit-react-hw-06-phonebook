import { GlobalStyle } from 'GlobalStyle';
import { InputForm } from 'components/InputForm';
import { Container } from 'components/common';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';

export function App() {
  //Удаляет контакт по его id
  const deleteContact = id => {
    // setContacts(contacts.filter(contact => contact.id !== id));
  };

  // //Управляет фильтром - контроллируемый элемент
  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };

  // //Возвращает массив контактов по фильтру
  const getVisibleContacts = () => {
    // const lowercaseFilter = filter.toLowerCase();
    // return contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(lowercaseFilter)
    // );
  };

  // *************************************************************************

  return (
    <Container>
      <h2>Phonebook</h2>
      <InputForm />

      <h2>Contacts</h2>
      {/* <Filter filter={filter} onChange={changeFilter} /> */}
      {/* <Contacts contacts={getVisibleContacts()} deleteContact={deleteContact} /> */}
      <GlobalStyle />
    </Container>
  );
}
