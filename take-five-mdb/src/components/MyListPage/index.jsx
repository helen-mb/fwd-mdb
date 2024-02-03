// React Imports
import { useEffect } from 'react';
// Chakra UI Imports
import { Box, Text } from '@chakra-ui/react';
// Components

export const MyListPage = () => {
  useEffect(() => {
    document.title = 'My List | Take Five';
  }, []);

  return (
    <>
      <Text>My List Page</Text>
    </>
  );
};
