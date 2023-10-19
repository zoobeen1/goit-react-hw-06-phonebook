import css from './TaskCounter.module.css';
// Импортируем хук
import { useSelector } from 'react-redux';

export const TaskCounter = () => {
  // Получаем массив задач из состояния Redux
  const tasks = useSelector(state => state.tasks);
  // На базе состояния Redux получаем производные данные
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
