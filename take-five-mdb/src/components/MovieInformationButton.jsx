import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export const MovieInformationButton = ({ movieId }) => {
  return (
    <Link to={`/movie-details/${movieId}`}>
      <Button
        bg="blue.500"
        color="white"
        rounded="md"
        fontWeight="bold"
        _hover={{ bg: 'blue.600' }}
        _focus={{ outline: 'none' }}
      >
        More Info
      </Button>
    </Link>
  );
};
