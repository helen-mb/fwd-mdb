// React Imports
import { useEffect } from 'react';
// Chakra UI Imports
import { Box, Text } from '@chakra-ui/react';
// Components

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Home | Take Five';
  }, []);

  return (
    <>
      <Text>HOME PAGE</Text>
    </>
  );
};
