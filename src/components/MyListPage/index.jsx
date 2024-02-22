import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { SavedMovie } from './SavedMovie';
import { FavouritesButton } from '../FavouritesButton'; 

export const MyListPage = () => {
  const [favouritedMovies, setFavouritedMovies] = useState([]);
  // Load favourited movies from localStorage

  useEffect(() => {
    const storedFavouritedMovies = JSON.parse(localStorage.getItem('favouritedMovies')) || [];
    setFavouritedMovies(storedFavouritedMovies);
  }, []);

  const [moviesData, setMoviesData] = useState([]);
  // Fetch movie data for each favourited movie

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        //promises are objects that represent the eventual completion or failure of an asynchronous operation. for this, that means that the fetch request will be completed or failed
        
        const promises = favouritedMovies.map(async (movieId) => {
          const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
            import.meta.env.VITE_REACT_APP_TMDB_API_KEY
          }`;
          const response = await fetch(apiUrl);
          const data = await response.json();
          return data; // This data object should contain properties like title, release_date, id, etc.
        });
        const moviesData = await Promise.all(promises);
        setMoviesData(moviesData);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMoviesData();
  }, [favouritedMovies]);

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
      {moviesData.length > 0 ? (
        moviesData.map((movie) => (
          <Box key={movie.id} mb={4}>
            <SavedMovie movie={movie} />
            <FavouritesButton
              movieId={movie.id}
              onFavouriteChange={handleFavouriteChange}
            />
          </Box>
        ))
      ) : (
        <Text>No favourites added yet.</Text>
      )}
    </Box>
  );
};
