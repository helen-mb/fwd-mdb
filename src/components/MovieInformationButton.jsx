import { Link } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons'; // Import the icon

export const MovieInformationButton = ({ movieId }) => {
  return (
    <Link to={`/movie-details/${movieId}`}>
      <IconButton
        aria-label="Movie Information"
        icon={<InfoOutlineIcon />} // Use the InfoOutlineIcon as the icon
        bg="blue.500"
        color="white"
        rounded="md"
        fontWeight="bold"
        _hover={{ bg: 'blue.600' }}
        _focus={{ outline: 'none' }}
      />
    </Link>
  );
};
