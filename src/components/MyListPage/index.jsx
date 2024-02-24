import { useContext } from 'react';
import { Box, Text, Grid } from '@chakra-ui/react';
import { SavedMovie } from './SavedMovie';
import { DataContext } from '../../Contexts';
import { useFavouritesList } from '../../hooks/useFavouritesList';
export const MyListPage = () => {
  const movieData = useContext(DataContext);
  const { favourites } = useFavouritesList();

  // Identify favourites from movie data stored in context
  const favouritesList = Object.keys(movieData).reduce((acc, dataKey) => {
    movieData[dataKey].forEach((movie) => {
      if (
        !acc.some((row) => row.id === movie.id) &&
        favourites.some((favourite) => favourite === movie.id)
      ) {
        acc.push(movie);
      }
    });
    return acc;
  }, []);

  return (
    <Box>
      {favouritesList.length > 0 ? (
        <Grid templateColumns="repeat(6, 1fr)" gap={6}>
          {favouritesList.map((movie) => {
            return <SavedMovie key={movie.id} movie={movie} />;
          })}
        </Grid>
      ) : (
        <Text>No favourites added yet.</Text>
      )}
    </Box>
  );
};
