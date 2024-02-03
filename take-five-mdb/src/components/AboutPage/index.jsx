// React Imports
import { useEffect } from 'react';
// Chakra UI Imports
import { Box, Text } from '@chakra-ui/react';
// Components

export const AboutPage = () => {
  useEffect(() => {
    document.title = 'About | Take Five';
  }, []);

  return (
    <>
      <Text>About Page</Text>
    </>
  );
};
