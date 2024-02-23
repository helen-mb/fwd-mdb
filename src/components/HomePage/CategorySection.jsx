import { Box, Heading, HStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { MovieQuickInfo } from '../MovieQuickInfo';
import { DataContext } from '../../Contexts';

export const CategorySection = () => {
  const movieData = useContext(DataContext);

  return (
    <Box>
      {Object.entries(movieData).map(([category, movies]) => (
        <Box key={category}>
          <Heading>{category}</Heading>
          <HStack>
            {movies.map((movie) => (
              <MovieQuickInfo key={movie.id} movie={movie} />
            ))}
          </HStack>
        </Box>
      ))}
    </Box>
  );
};
