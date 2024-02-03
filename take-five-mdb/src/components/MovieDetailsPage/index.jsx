// React Imports
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Chakra UI Imports
import { Box, Text } from '@chakra-ui/react';
// Components

export const MovieDetailsPage = () => {
  useEffect(() => {
    document.title = 'Movie Details | Take Five';
  }, []);

  // ? will need to pass an id to the component
  // to identify the specific movie being displayed ?
  let { id } = useParams();

  return (
    <>
      <Text>Movie Details Page</Text>
    </>
  );
};
