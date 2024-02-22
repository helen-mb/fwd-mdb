import { useState, useEffect } from 'react';
import { Box, Text, Grid } from '@chakra-ui/react';
import { SavedMovie } from './SavedMovie';

export const MyListPage = () => {
  const [favouritedMovies, setFavouritedMovies] = useState([]);
  
  // Load favourited movies from localStorage
  useEffect(() => {
    const storedFavouritedMovies = JSON.parse(localStorage.getItem('favouritedMovies')) || [];
    setFavouritedMovies(storedFavouritedMovies);
  }, []);

  // Update favourited movies when localStorage changes
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const promises = favouritedMovies.map(async (movieId) => {
          const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
            import.meta.env.VITE_REACT_APP_TMDB_API_KEY
          }`;
          const response = await fetch(apiUrl);
          const data = await response.json();
          return data;
        });
        const moviesData = await Promise.all(promises);
        setMoviesData(moviesData);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMoviesData();
  }, [favouritedMovies]);

  return (
    <Box>
      {moviesData.length > 0 ? (
        <Grid templateColumns="repeat(6, 1fr)" gap={6}>
          {moviesData.map((movie) => (
            <SavedMovie key={movie.id} movie={movie} />
          ))}
        </Grid>
      ) : (
        <Text>No favourites added yet.</Text>
      )}
    </Box>
  );
};