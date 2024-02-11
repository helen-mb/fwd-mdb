import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

export const FavouritesButton = ({ movieId }) => {
  // State to track whether the movie is added to favorites
  const [isFavourite, setIsFavourite] = useState(false);

  // Function to toggle the favorite status
  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <Box
      as="button"
      bg={isFavourite ? 'red.500' : 'blue.500'}
      color="white"
      rounded="md"
      p={2}
      fontWeight="bold"
      onClick={toggleFavourite}
      _hover={{ bg: isFavourite ? 'red.600' : 'blue.600' }}
      _focus={{ outline: 'none' }}
    >
    <Text fontSize="sm">Favourites</Text>
    </Box>
  );
};

