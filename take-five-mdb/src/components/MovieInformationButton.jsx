// MovieInformationButton.jsx
import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

export const MovieInformationButton = ({ movieId }) => {
    return (
      <Link to={`/movie-details/${movieId}`}>
        <Box
          as="button"
          bg="blue.500"
          color="white"
          rounded="md"
          p={2}
          fontWeight="bold"
          _hover={{ bg: 'blue.600' }}
          _focus={{ outline: 'none' }}
        >
          <Text fontSize="sm">More Info</Text>
        </Box>
      </Link>
    );
  };