import { Box, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MovieQuickInfo } from '../MovieQuickInfo';

export const CategorySection = ({ categories }) => {
  const [moviesByCategory, setMoviesByCategory] = useState({});

  useEffect(() => {
    const fetchMoviesByCategory = async () => {
      try {
        const promises = categories.map(async (category) => {
          const apiUrl = `https://api.themoviedb.org/3/movie/${category}?api_key=${
            import.meta.env.VITE_REACT_APP_TMDB_API_KEY
          }`;
          const response = await fetch(apiUrl);
          const data = await response.json();
          return { category, movies: data.results.slice(0, 6) };
        });
        const moviesData = await Promise.all(promises);
        const moviesByCategoryObj = {};
        moviesData.forEach(({ category, movies }) => {
          moviesByCategoryObj[category] = movies;
        });
        setMoviesByCategory(moviesByCategoryObj);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMoviesByCategory();
  }, [categories]);

  return (
    <Box>
      {Object.entries(moviesByCategory).map(([category, movies]) => (
        <Box key={category}>
          <h2>{category}</h2>
          <Grid templateColumns="repeat(6, 1fr)" gap={6}>
            {movies.map((movie) => (
              <MovieQuickInfo key={movie.id} movie={movie} />
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};
