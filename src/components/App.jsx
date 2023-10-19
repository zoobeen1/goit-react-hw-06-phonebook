// import { GlobalStyle } from 'GlobalStyle';
// import common from 'components/common';

import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';

// const Container = common.Container;
function App() {
  //Вызывается при отправке формы - возвращает буль от которого зависит сброс формы
  //Буль необходим для реализации проверки дублирующихся записей
  // const handleSubmit = e => {
  //   e.preventDefault();
  // };
  // *************************************************************************
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
  // return (
  //   <>
  //     <Container>Ghbdtn z rjyntbyth</Container>
  //     {/*Подключение глобального стиля */}
  //     <GlobalStyle />
  //   </>
  // );
}
export default App;
