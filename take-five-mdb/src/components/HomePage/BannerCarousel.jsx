// React Imports
// Chakra UI Imports
import { Box, Text } from '@chakra-ui/react';
// Components
import { MovieQuickInfo } from '../MovieQuickInfo';

export const BannerCarousel = () => {
  return (
    <>
      {/* X3: */}
      <Box borderWidth={'1px'} bg={'lightblue'}>
        {/* Hero Image */}
        <Text>This is a banner. A hero image will go here.</Text>
        <MovieQuickInfo />
      </Box>
    </>
  );
};
