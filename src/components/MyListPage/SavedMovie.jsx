import { Box } from '@chakra-ui/react';
import { MovieQuickInfo } from '../MovieQuickInfo';
import { MovieCard } from '../MovieCard';

export const SavedMovie = ({ movie }) => {
  return (
    <>
      {/* option one: Stick to our prototype as much as possible*/}
      <Box
        borderWidth="1px"
        borderRadius="md"
        p="4"
        mb="4"
        position={'relative'}
      >
        <MovieQuickInfo movie={movie} />
      </Box>
      {/* Option two: just collect a gallery */}
      <MovieCard movie={movie} />
    </>
  );
};
