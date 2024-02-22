import { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
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

  // function to set the initial value in local storage so that the button is in sync with the local storage colour wise and value wise
  useEffect(() => {
    // If the movie is favourited initially, set it in local storage
    if (isFavourite) {
      localStorage.setItem(localStorageKey, 'true');
    }
  }, [isFavourite, localStorageKey]);

  // Function to toggle the favorite status
  const toggleFavourite = () => {
    const updatedIsFavourite = !isFavourite;
    setIsFavourite(updatedIsFavourite);

    // Update the favorited status in localStorage
     localStorage.setItem(localStorageKey, updatedIsFavourite.toString());

    // Update favouritedMovies array in local storage
    let favouritedMovies = JSON.parse(localStorage.getItem('favouritedMovies')) || [];
    if (updatedIsFavourite) {
      favouritedMovies.push(movieId);
    } else {
      favouritedMovies = favouritedMovies.filter(id => id !== movieId);
    }
    localStorage.setItem('favouritedMovies', JSON.stringify([...new Set(favouritedMovies)]));

    // Call onFavouriteChange callback with updated favouritedMovies array
    if (onFavouriteChange) {
      onFavouriteChange(favouritedMovies);
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
