import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';

const store = configureStore({
  reducer: { tasks: contactsReducer },
});

export default store;
