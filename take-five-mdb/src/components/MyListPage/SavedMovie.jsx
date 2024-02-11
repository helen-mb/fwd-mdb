import { Box, Text } from '@chakra-ui/react';
import { MovieQuickInfo } from '../MovieQuickInfo';

export const SavedMovie = ({ movieId }) => {
  return (
    <Box key={movieId} borderWidth="1px" borderRadius="md" p="4" mb="4">
      <Text>Movie ID: {movieId}</Text>
      <MovieQuickInfo movieId={movieId} />
    </Box>
  );
};

