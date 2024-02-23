import { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'; // Import the AddIcon

export const FavouritesButton = ({ movieId, onFavouriteChange }) => {
  const localStorageKey = `favorite_${movieId}`;

  const [isFavourite, setIsFavourite] = useState(() => {
    return localStorage.getItem(localStorageKey) === 'true';
  });

  useEffect(() => {
    if (isFavourite) {
      localStorage.setItem(localStorageKey, 'true');
    }
  }, [isFavourite, localStorageKey]);

  const toggleFavourite = () => {
    const updatedIsFavourite = !isFavourite;
    setIsFavourite(updatedIsFavourite);

    localStorage.setItem(localStorageKey, updatedIsFavourite.toString());

    const favouritedMovies = JSON.parse(localStorage.getItem('favouritedMovies')) || [];
    const updatedFavouritedMovies = updatedIsFavourite
      ? [...new Set([...favouritedMovies, movieId])]
      : favouritedMovies.filter(id => id !== movieId);

    localStorage.setItem('favouritedMovies', JSON.stringify(updatedFavouritedMovies));

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
