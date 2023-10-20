// import initial state
import { initialState } from './constants';
import { addContact } from './actions';
import { createReducer } from '@reduxjs/toolkit';

//createReducer(initialState, actionsMap as {[name of reducer]: (state, action) => {return [...state, action.payload]}})
export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, { payload }) => {
    // return [...state, payload];
    state.push(payload);
  },
});
