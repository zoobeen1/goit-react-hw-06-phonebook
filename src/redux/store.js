import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducer';

const store = configureStore({
  reducer: { tasks: contactsReducer },
});

export default store;
