//inputs for Form
import { Formik } from 'formik';
import { Input, FormStyled } from './Form.styled';
import { Button } from '../common';
import { FormError } from './FormError';
import * as yup from 'yup';
// Импортируем хук
import { useDispatch } from 'react-redux';
// Импортируем action generator
import { addContact } from 'redux/contactsSlice';

export const InputForm = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  const INITIAL_VALUES = { name: '', phone: '' };
  //Formik Validation schema
  const schema = yup.object().shape({
    name: yup.string().min(5).max(40).required('Name is required'),
    phone: yup.string().min(5).max(13).required('Phone is required'),
  });

  //Submit function
  function handleSubmit(task) {
    dispatch(addContact(task));
    // form.reset();
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStyled>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          id="name"
          // pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Add a new contact"
          required
        />
        <FormError name="name" />

        <label htmlFor="phone">Phone</label>
        <Input
          type="tel"
          name="phone"
          id="phone"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Add a phone number"
          required
        />
        <FormError name="phone" />

        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};
