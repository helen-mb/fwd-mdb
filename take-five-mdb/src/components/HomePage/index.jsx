// React Imports
import { useEffect } from 'react';
// Chakra UI Imports
import { Box, Text } from '@chakra-ui/react';
// Components
import { BannerCarousel } from './BannerCarousel';
import { CategorySection } from './CategorySection';

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Home | Take Five';
  }, []);
  
  return (
    <>
      <BannerCarousel />
      <Text>HOME PAGE</Text>
      <Box>
        {/* Title */}
        {/* Jump Links */}

        <CategorySection category="Popular" />
        <CategorySection category="Top Rated" />
        <CategorySection category="Upcoming" />
        <CategorySection category="Now Playing" />
      </Box>
    </>
  );
};