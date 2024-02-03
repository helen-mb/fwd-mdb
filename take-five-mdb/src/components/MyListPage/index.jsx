// React Imports
import { useEffect } from 'react';
// Chakra UI Imports
import { Box, Text } from '@chakra-ui/react';
// Components
import { MovieCard } from '../MovieCard';
import { StaticBanner } from '../StaticBanner';
import { SavedMovie } from './SavedMovie';

export const MyListPage = () => {
  useEffect(() => {
    document.title = 'My List | Take Five';
  }, []);

  return (
    <>
      <StaticBanner />
      <Text>My List Page</Text>
      <Box>
        {/* conditional: No movies! Add some */}
        <SavedMovie />
      </Box>
      <Box>
        {/* Recently Viewed Section Title*/}
        <MovieCard />
        {/* Discover More btn */}
      </Box>
    </>
  );
};
