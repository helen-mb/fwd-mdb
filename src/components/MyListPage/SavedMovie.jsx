import { Box, Text } from '@chakra-ui/react';
import { MovieInformationButton } from '../MovieInformationButton';

export const SavedMovie = ({ movie }) => {
  return (
    <Box borderWidth="1px" borderRadius="md" p="4" mb="4">
      <Text>Title: {movie.title}</Text>
      <Text>Release Date: {movie.release_date}</Text>
      {/* Add more movie details as needed */}
      <MovieInformationButton movieId={movie.id} />
    </Box>
  );
};