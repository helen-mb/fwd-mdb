// React Imports
// Chakra UI Imports
import { Box } from '@chakra-ui/react';
// Components
import { Nav } from './Nav';

const Header = () => {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <h1>Take Five</h1>
      <Nav />
    </Box>
  );
};

export default Header;
