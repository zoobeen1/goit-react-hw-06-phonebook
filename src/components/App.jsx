import { GlobalStyle } from 'GlobalStyle';
import common from 'components/common';

const Container = common.Container;
function App() {
  // componentDidMount() {}
  // componentDidUpdate() {}

  //Вызывается при отправке формы - возвращает буль от которого зависит сброс формы
  //Буль необходим для реализации проверки дублирующихся записей
  // const handleSubmit = e => {
  //   e.preventDefault();
  // };
  // *************************************************************************
  return (
    <>
      <Container>Ghbdtn z rjyntbyth</Container>
      {/*Подключение глобального стиля */}
      <GlobalStyle />
    </>
  );
}
export default App;
