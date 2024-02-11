import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { SavedMovie } from './SavedMovie';
import { FavouritesButton } from '../FavouritesButton'; 

export const MyListPage = () => {
  const [favouritedMovies, setFavouritedMovies] = useState([]);

  useEffect(() => {
    const storedFavouritedMovies = JSON.parse(localStorage.getItem('favouritedMovies')) || [];
    setFavouritedMovies(storedFavouritedMovies);
  }, []);

  const handleFavouriteChange = (movieId, isFavourite) => {
    let updatedMovies = [...favouritedMovies];
    if (isFavourite) {
      updatedMovies.push(movieId);
    } else {
      updatedMovies = updatedMovies.filter((id) => id !== movieId);
    }
    setFavouritedMovies(updatedMovies);
    localStorage.setItem('favouritedMovies', JSON.stringify(updatedMovies));
  };

  return (
    <Box>
      {favouritedMovies.map((movieId) => (
        <Box key={movieId} mb={4}>
          <SavedMovie movieId={movieId} />
          <FavouritesButton
            movieId={movieId}
            onFavouriteChange={handleFavouriteChange} // Pass the onFavouriteChange function
          />
        </Box>
      ))}
    </Box>
  );
};