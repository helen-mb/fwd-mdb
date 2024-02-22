import { Box } from '@chakra-ui/react';
import { MovieQuickInfo } from '../MovieQuickInfo';

export const SavedMovie = ({ movie }) => {
  return (
    <Box borderWidth="1px" borderRadius="md" p="4" mb="4">
      <MovieQuickInfo movie={movie} />
    </Box>
  );
};