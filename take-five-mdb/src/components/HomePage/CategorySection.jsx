import { useEffect, useState } from 'react';
import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import { MovieQuickInfo } from '../MovieQuickInfo';

export const CategorySection = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (category) {
          const apiUrl = `https://api.themoviedb.org/3/movie/${category}?api_key=YOUR_API_KEY`;
          const response = await fetch(apiUrl);
          const data = await response.json();
          setMovies(data.results);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <Box>
      <Text>{category}</Text>
      <SimpleGrid columns={6} spacing={4}>
        {movies.map((movie) => (
          <MovieQuickInfo key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
