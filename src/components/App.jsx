import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { Container } from 'components/common';
import { Contacts } from 'components/Contacts';

export function App() {
  return (
    <Container>
      <PhoneBook />
      <Contacts />
    </Container>
  );
}
