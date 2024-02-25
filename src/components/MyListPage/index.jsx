import { useContext } from 'react';
import { Box, Text, Grid, Heading, Container } from '@chakra-ui/react';
import { DataContext } from '../../Contexts';
import { useFavouritesList } from '../../hooks/useFavouritesList';
import { MovieCard } from '../MovieCard';
export const MyListPage = () => {
  const movieData = useContext(DataContext);
  const { favourites } = useFavouritesList();

  // Identify favourites from movie data stored in context
  const favouritesList = Object.keys(movieData).reduce((acc, dataKey) => {
    movieData[dataKey].forEach((movie) => {
      if (
        !acc.some((row) => row.id === movie.id) && // Check if movie already exists in the accummulator to ensure we get a unique list
        favourites.some((favourite) => favourite === movie.id) // Also check to see if the movie is in the favourites list
      ) {
        acc.push(movie);
      }
    });
    return acc;
  }, []);

  return (
    <Box bg="brand.900" color="brand.50" px="5">
      <Heading mb={5}>My List</Heading>
      {favouritesList.length > 0 ? (
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(3, 1fr)',
            'repeat(4, 1fr)',
            'repeat(5, 1fr)',
          ]}
          gap={6}
        >
          {favouritesList.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </Grid>
      ) : (
        <Text>No favourites added yet.</Text>
      )}
    </Box>
  );
};
