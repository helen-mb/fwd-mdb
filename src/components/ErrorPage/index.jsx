// React Imports
import { useEffect } from 'react';
// Chakra UI Imports
import { Box, Text } from '@chakra-ui/react';
// Components
import { StaticBanner } from '../StaticBanner';

export const ErrorPage = () => {
  useEffect(() => {
    document.title = 'Error | Take Five';
  }, []);

  return (
    <>
      <StaticBanner />
      <Text>Error Page</Text>
      <Box>
        {/* Error Details*/}
        {/* Link back to Home */}
      </Box>
    </>
  );
};
