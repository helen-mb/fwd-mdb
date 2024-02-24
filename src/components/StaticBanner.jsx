// React Imports
import { useContext } from 'react';
// Chakra UI Imports
import { Box, Text } from '@chakra-ui/react';
// Components
import { DataContext } from '../Contexts';
import { getUniqueMovieList } from '../utils';

export const StaticBanner = ({movieId}) => {
  const movieData = useContext(DataContext);
  const uniqueMovie= getUniqueMovieList(movieData);


  const movie = uniqueMovie.find((movieItem) => movieItem.id === parseInt(movieId));
  const backdropImage = movie?.backdrop_path;
  
  return (
    <>
      {/* Hero Image */}
      <Box bg={backdropImage ? `url(https://image.tmdb.org/t/p/w1280${backdropImage})` : 'purple'}

      //inline style below that will have to be changed for bg image
      style={{
        height: '400px',
        backgroundSize: 'cover'
      }}>
        {/* Hero Image */}
        <Text>This is a banner. A hero image will go here.</Text>
        <Box>
          {/* Hero Ribbon: */}
          {/* Page Heading */}
          {/* conditionally rendered: MovieQuickInfo Component*/}
          {/* Page subheading */}
          {/* conditionally rendered: filter */}
        </Box>
      </Box>
    </>
  );
};
