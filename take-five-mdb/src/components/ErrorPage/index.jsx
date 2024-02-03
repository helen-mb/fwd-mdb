// React Imports
import { useEffect } from 'react';
// Chakra UI Imports
import { Box, Text } from '@chakra-ui/react';
// Components

export const ErrorPage = () => {
  useEffect(() => {
    document.title = 'Error | Take Five';
  }, []);

  return (
    <>
      <Text>Error Page</Text>
    </>
  );
};
