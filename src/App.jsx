import { GlobalStyle } from 'GlobalStyle';
import { Component } from 'react';

export class App extends Component {
  state = {};
  // componentDidMount() {}
  // componentDidUpdate() {}

  //Вызывается при отправке формы - возвращает буль от которого зависит сброс формы
  //Буль необходим для реализации проверки дублирующихся записей
  handleSubmit = e => {
    e.preventDefault();
  };
  // *************************************************************************
  render() {
    //Деструктуризация объекта из state
    <>
      {/*Подключение глобального стиля */}
      <GlobalStyle />
    </>;
  }
}
