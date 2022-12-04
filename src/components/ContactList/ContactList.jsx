import { deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Item, Text, List } from './ContactList.styled';

const ContactList = () => {
  const { items, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  let foundContacts = items.filter(item =>
    item.name.toLowerCase().includes(filter)
  );

  return (
    <Box>
      <List>
        {items.length > 0 ? (
          foundContacts.map(({ id, name, phone }) => (
            <Item key={id}>
              <Text>
                {name}: {phone}
              </Text>
              <Button type="submit" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </Item>
          ))
        ) : (
          <Text>Contact list is empty</Text>
        )}
      </List>
    </Box>
  );
};

export default ContactList;
