import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { Box, Button, Form, Label, Text } from './ContactForm.styled';

const ContactForm = () => {
  const items = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: '',
    phone: '',
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    let savedName = false;

    items.forEach(element => {
      if (element.name.toLowerCase() === state.name.toLowerCase()) {
        alert(`${state.name} is already in contacts`);
        savedName = true;
        setState({
          name: '',
          phone: '',
        });
      }
    });
    if (savedName) {
      return;
    }

    dispatch(addContact(state));
    setState({
      name: '',
      phone: '',
    });
  };

  return (
    <>
      <Box>
        <Form onSubmit={handleSubmit}>
          <Label>
            <Text>Name</Text>
            <input
              value={state.name}
              onChange={handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            <Text>Number</Text>
            <input
              value={state.phone}
              onChange={handleChange}
              type="text"
              name="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </Box>
    </>
  );
};

export default ContactForm;
