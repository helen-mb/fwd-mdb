// React Imports
import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// Chakra UI Imports
import { Box, Text } from '@chakra-ui/react';
// Components
import { MovieCard } from '../MovieCard';
import { StaticBanner } from '../StaticBanner';

export const MovieDetailsPage = () => {
  useEffect(() => {
    document.title = 'Movie Details | Take Five';
  }, []);

  // ? will need to pass an id to the component
  // to identify the specific movie being displayed ?
  // let { id } = useParams();

  return (
    <>
      <StaticBanner />
      <Text>Movie Details Page</Text>
      <Box>
        {/* Poster */}
        {/* Tagline */}
        {/* Synopsis */}
        {/* Add to list btn */}
        <Box>{/* Cast */}</Box>
        <Box>{/* Crew */}</Box>
      </Box>
      <Box>
        {/* Your List Section Title */}
        <MovieCard />
      </Box>
    </>
  );
};
