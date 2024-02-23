import { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'; // Import the AddIcon

// Create a new component called FavouritesButton
export const FavouritesButton = ({ movieId, onFavouriteChange }) => {
  const localStorageKey = `favorite_${movieId}`;
  
  // this hook will check if the movie is already in the favourites list
  const [isFavourite, setIsFavourite] = useState(() => {
    return localStorage.getItem(localStorageKey) === 'true';
  });

  // this hook will update the local storage when the isFavourite state changes
  useEffect(() => {
    if (isFavourite) {
      localStorage.setItem(localStorageKey, 'true');
    }
  }, [isFavourite, localStorageKey]);

  // this function will toggle the isFavourite state and update the local storage
  const toggleFavourite = () => {
    const updatedIsFavourite = !isFavourite;
    setIsFavourite(updatedIsFavourite);

    localStorage.setItem(localStorageKey, updatedIsFavourite.toString());

    // Update the list of favourited movies in localStorage
    const favouritedMovies = JSON.parse(localStorage.getItem('favouritedMovies')) || [];
    const updatedFavouritedMovies = updatedIsFavourite
      ? [...new Set([...favouritedMovies, movieId])]
      : favouritedMovies.filter(id => id !== movieId);

    localStorage.setItem('favouritedMovies', JSON.stringify(updatedFavouritedMovies));

    // Call the onFavouriteChange callback if it exists
    if (onFavouriteChange) {
      onFavouriteChange(updatedFavouritedMovies);
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
    </IconButton>
  );
};
