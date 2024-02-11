// React Imports
import { useEffect } from 'react';
// Chakra UI Imports
import { Text } from '@chakra-ui/react';
// Components
import { MovieQuickInfo } from '../MovieQuickInfo'; // Import MovieQuickInfo component

export const CategorySection = ({ category }) => {
  useEffect(() => {
    document.title = 'Home | Take Five';
  }, []);

  return (
    <>
      <Text>{category}</Text> {/* Display category title */}
      {/* Render MovieQuickInfo component */}
      <MovieQuickInfo category={category} />
    </>
  );
};
