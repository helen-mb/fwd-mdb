import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

export const FavouritesButton = ({ movieId }) => {
  const localStorageKey = `favorite_${movieId}`;

  // State to track whether the movie is added to favorites
  const [isFavourite, setIsFavourite] = useState(() => {
    // Retrieve the favorited status from localStorage
    const isFav = localStorage.getItem(localStorageKey);
    // Convert the stored value to a boolean, default to false if not found
    return isFav === 'true';
  });

  // Function to toggle the favorite status
  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  // Update localStorage when isFavourite changes
  useEffect(() => {
    localStorage.setItem(localStorageKey, isFavourite);
  }, [isFavourite, localStorageKey]);

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
  <Text fontSize="sm">Favourite</Text>
    </Box>
  );
};
