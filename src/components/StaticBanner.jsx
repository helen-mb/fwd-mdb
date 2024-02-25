// React Imports
import { useContext } from 'react';
// Chakra UI Imports
import { Box } from '@chakra-ui/react';
// Components
import { DataContext } from '../Contexts';
import { getUniqueMovieList } from '../utils';



export const StaticBanner = ({ movieId, children }) => {
  const movieData = useContext(DataContext);
  const uniqueMovie = getUniqueMovieList(movieData);
  const movie = uniqueMovie.find((movieItem) => movieItem.id === parseInt(movieId));
  const backdropImage = movie?.backdrop_path;
 

  return (
    <>
      {/* Hero Banner */}
      <Box
        bg={backdropImage ? `url(https://image.tmdb.org/t/p/w1280${backdropImage})` : 'purple'}
        style={{
          height: '600px',
          backgroundSize: 'cover',
          position: 'relative'
        }}
      >
        <Box
          width="100%"
          position="absolute"
          bgGradient="linear(to-t, brand.900, #01010300)"
          height="30%"
          bottom="0"
          left="0"
          right="0"
        ></Box>
        {/* Hero Ribbon */}
        <Box
          borderTop="1.5px white solid"
          borderBottom="1.5px white solid"
          bg="rgba(0, 0, 0, 0.5)"
          p="4"
          color="white"
          position="absolute"
          display="flex"
          top="30%"
          height="40%"
          width="100%" // Makes the ribbon cover the entire width of the parent box
        >
        
          {/* Render movie info or heading */}
          {children}
        </Box>
      </Box>
    </>
  );
};
