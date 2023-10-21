import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './constants';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.push(payload);
      },
      prepare({ name, phone }) {
        return { payload: { id: nanoid(), name, phone } };
      },
    },
    deleteContact(state, { payload }) {
      state.filter(res => res.id !== payload);
    },
  },
});
export const { addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
