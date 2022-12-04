import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { useSelector } from 'react-redux';
import { Box, Button, Item, Text, List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  let foundContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <Box>
      <List>
        {contacts.length > 0 ? (foundContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Button
              type="submit"
              onClick={() => dispatch(deleteContact({ id }))}
            >
              Delete
            </Button>
          </Item>
        ))):(<Text>Contact list is empty</Text>)}
      </List>
    </Box>
  );
};

export default ContactList;
