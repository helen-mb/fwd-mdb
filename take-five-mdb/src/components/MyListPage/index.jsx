//react imports
import { useEffect, useState } from 'react';
//chakra ui imports
import { Box, Text } from '@chakra-ui/react';

//components
import { MovieQuickInfo } from '../MovieQuickInfo';
import { FavouritesButton } from '../FavouritesButton';

export const MyListPage = () => {
  const [favouritedMovies, setFavouritedMovies] = useState([]);

  useEffect(() => {
    // Retrieve favourited movies from localStorage on component mount
    const storedFavouritedMovies = JSON.parse(localStorage.getItem('favouritedMovies')) || [];
    setFavouritedMovies(storedFavouritedMovies);
  }, []);

  const handleFavouriteChange = (movieId, isFavourite) => {
    let updatedMovies = [...favouritedMovies];
    if (isFavourite) {
      // Add movie to favourites list
      updatedMovies.push(movieId);
    } else {
      // Remove movie from favourites list
      updatedMovies = updatedMovies.filter((id) => id !== movieId);
    }
    setFavouritedMovies(updatedMovies);
    // Update localStorage with updated list of favourited movies
    localStorage.setItem('favouritedMovies', JSON.stringify(updatedMovies));
  };

  return (
    <>
      <Box>
        {favouritedMovies.length > 0 ? (
          favouritedMovies.map((movieId) => (
            <Box key={movieId}>
              <MovieQuickInfo movieId={movieId} />
              <FavouritesButton movieId={movieId} onFavouriteChange={handleFavouriteChange} />
            </Box>
          ))
        ) : (
          <Text>No movies in your list yet. Add some favourites!</Text>
        )}
      </Box>
    </>
  );
};