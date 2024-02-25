import { useContext, useEffect, useState } from 'react';
import { Box, Text, Grid, Heading, Container, Link } from '@chakra-ui/react';
import { DataContext } from '../../Contexts';
import { useFavouritesList } from '../../hooks/useFavouritesList';
import { MovieCard } from '../MovieCard';
import {Link as RouterLink} from 'react-router-dom';
import navTextStyles from '../../themes/nav-themes.jsx';

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

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  useEffect(() => {
    document.title = 'About | Take Five';
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  let adjustedHeight = viewportHeight - 244;

  return (
    <Box bg="brand.900" color="brand.50" px="5" minH={adjustedHeight}>
      <Heading mb={5}>My List</Heading>
      {favouritesList.length > 0 ? (
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            'repeat(4, 1fr)',
            'repeat(5, 1fr)',
            'repeat(6, 1fr)',
          ]}
          gap={6}
        >
          {favouritesList.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </Grid>
      ) : (
        <Text>No favourites added yet. Look through our database and <Link as={RouterLink} to="/" sx={navTextStyles} fontFamily="assistant.bold" borderBottom="2px solid #1962B6" >add some here!</Link></Text>
      )}
    </Box>
  );
};
