import { Box, Text } from '@chakra-ui/react';
import { MovieInformationButton } from '../MovieInformationButton';

export const SavedMovie = ({ movieId }) => {
  // Placeholder movie details
  const movieDetails = {
    title: "Movie Title",
    releaseDate: "Release Date",
    // Add more movie details as needed
  };

  return (
    <Box key={movieId} borderWidth="1px" borderRadius="md" p="4" mb="4">
      <Text>Movie ID: {movieId}</Text>
      {/* Display movie details */}
      <MovieInformationButton movieId={movie?.id} />
    </Box>
  );
};
