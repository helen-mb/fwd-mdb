import { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';

export const FavouritesButton = ({ movieId, onFavouriteChange }) => {
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
    // Update localStorage when isFavourite changes
    localStorage.setItem(localStorageKey,isFavourite);
    if (onFavouriteChange){
      onFavouriteChange(movieId, isFavourite);
    }
  };

  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        toggleFavourite();
      }}
      backgroundColor={isFavourite ? 'red' : 'blue'}
      color="white"
      borderRadius="0.4rem"
      padding="8px"
      width="6rem"
      fontWeight="bold"
      cursor="pointer"
      outline="none"
      _hover={{ backgroundColor: isFavourite ? 'red.600' : 'blue.600' }}
    >
      <Text fontSize="sm">Favourite</Text>
    </Button>
  );
};
