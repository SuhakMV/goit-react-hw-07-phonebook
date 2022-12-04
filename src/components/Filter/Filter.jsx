import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactSlice';
import { Box, Label, Text } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box>
      <Label>
        <Text>Find contacts by name:</Text>
        <input type="name" onChange={onFilterChange} />
      </Label>
    </Box>
  );
};

export default Filter;
