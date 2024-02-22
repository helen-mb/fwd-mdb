import { useState } from 'react';
import { IconButton, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'; // Import the AddIcon

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
    <IconButton
       aria-label="Add to Favorites"
      icon={<AddIcon />} // Use the AddIcon as the icon
      onClick={(e) => {
        e.preventDefault();
        toggleFavourite();
      }}
      backgroundColor={isFavourite ? 'red.500' : 'blue.500'}
      color="white"
      rounded="md"
      fontWeight="bold"
      _focus={{ outline: 'none' }}
      _hover={{ backgroundColor: isFavourite ? 'red.600' : 'blue.600' }}
    >
      <Text fontSize="sm">Favourite</Text>
    </IconButton>
  );
};
