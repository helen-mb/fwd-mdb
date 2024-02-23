import { Box, Grid } from '@chakra-ui/react';
import { useContext } from 'react';
import { MovieQuickInfo } from '../MovieQuickInfo';
import { DataContext } from '../../Contexts';

export const CategorySection = () => {
  const movieData = useContext(DataContext);

  return (
    <Box>
      {Object.entries(movieData).map(([category, movies]) => (
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
