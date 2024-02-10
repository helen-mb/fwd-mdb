// React Imports
import { Link } from 'react-router-dom';
// Chakra UI Imports
import { Box } from '@chakra-ui/react';
// Components

export const MovieQuickInfo = ({ children }) => {
  return (
    <>
      {/* Title */}
      {/* rating   |   year   |   timestamp   |   user score */}
      {/* Genres */}
      {/* (conditionally rendered:) Synopsis */}
      {children}
      {/* (conditional) add btn   |    (conditional) info btn   |   (conditional) seen it btn */}
      <Box as={Link} to="/my-list" color={'blue'} borderWidth={'1px'}>
        This link goes to My List (This is just testing nested links. It might
        need to be moved to a button component?)
      </Box>
    </>
  );
};
