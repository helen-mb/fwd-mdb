// React Imports
import { useEffect } from 'react';
// Chakra UI Imports
import { Box, Text } from '@chakra-ui/react';
// Components
import { StaticBanner } from '../StaticBanner';

export const AboutPage = () => {
  useEffect(() => {
    document.title = 'About | Take Five';
  }, []);

  return (
    <>
      <StaticBanner />
      <Text>About Page</Text>
      <Box>
        {/* What is Take Five? */}
        {/* Logo */}
        {/* paragraph */}
      </Box>
      <Box>
        {/* What is TMDB? */}
        {/* logo */}
        {/* paragraph */}
      </Box>
      <Box>{/* Disclaimer */}</Box>
    </>
  );
};
