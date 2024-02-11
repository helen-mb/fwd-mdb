import { Box, Text } from '@chakra-ui/react';
import { MovieQuickInfo } from '../MovieQuickInfo'; // Import MovieQuickInfo if needed

export const SavedMovie = ({ movieId }) => {
  // Fetch movie details based on movieId
  // You need to implement this part based on how you fetch movie details in your application
  // For example, if you have a function to fetch movie details from an API, you can call that function here
  // You can also pass the movie details as props from the parent component if they are available there
  // For now, I'll assume you have a function called fetchMovieDetailsById that fetches movie details based on movieId
  const movieDetails = fetchMovieDetailsById(movieId); // Implement this function

  return (
    <Box key={movieId} borderWidth="1px" borderRadius="md" p="4" mb="4">
      <Text>Movie ID: {movieId}</Text>
      {/* Display movie details */}
      {movieDetails && (
        <>
          <Text>Title: {movieDetails.title}</Text>
          <Text>Release Date: {movieDetails.releaseDate}</Text>
          {/* Add more movie details as needed */}
        </>
      )}
    </Box>
  );
};