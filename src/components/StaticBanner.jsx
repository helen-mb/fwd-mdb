// React Imports
// Chakra UI Imports
import { Box, Text } from '@chakra-ui/react';
// Components

export const StaticBanner = () => {
  return (
    <>
      {/* Hero Image */}
      <Box borderWidth={'1px'} bg={'lightblue'}>
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
