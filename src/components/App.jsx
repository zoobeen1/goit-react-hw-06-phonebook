import { GlobalStyle } from 'GlobalStyle';
import { InputForm } from 'components/InputForm';
import { Container } from 'components/common';
import { Contacts } from 'components/Contacts';

export function App() {
  //Удаляет контакт по его id
  const deleteContact = id => {
    // setContacts(contacts.filter(contact => contact.id !== id));
  };

  // //Управляет фильтром - контроллируемый элемент
  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };

  // *************************************************************************

  return (
    <Container>
      <h2>Phonebook</h2>
      <InputForm />
      <Contacts />
      <GlobalStyle />
    </Container>
  );
}
