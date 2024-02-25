import { Link } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react';
import { FaInfo } from 'react-icons/fa6';

export const MovieInformationButton = ({ movieId }) => {
  return (
    <Link to={`/movie-details/${movieId}`}>
      <IconButton
        size="xs"
        variant="outline"
        aria-label="Movie Information"
        icon={<FaInfo />} // Use the InfoOutlineIcon as the icon
        color="white"
        isRound
        fontWeight="bold"
        _hover={{ bg: 'blue.700' }}
        _focus={{ outline: 'none' }}
      />
    </Link>
  );
};
