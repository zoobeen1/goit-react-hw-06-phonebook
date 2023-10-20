import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

//используем - createAction(type, prepareAction() - if need)
export const addContact = createAction(
  'contacts/addContact',
  ({ name, phone }) => {
    return { payload: { id: nanoid(), name, phone } };
  }
);

export const deleteContact = createAction('contacts/deleteContact');
//   Id => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: Id,
//   };
// };
