import { GlobalStyle } from 'GlobalStyle';
import { InputForm } from 'components/InputForm';
import { Container } from 'components/common';
import { Contacts } from 'components/Contacts';

export function App() {
  return (
    <Container>
      <h2>Phonebook</h2>
      <InputForm />
      <Contacts />
      <GlobalStyle />
    </Container>
  );
}
