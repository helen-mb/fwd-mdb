// React Imports
// Chakra UI Imports
import { Box, Heading } from '@chakra-ui/react';
// Components
import { Nav } from './Nav';

const Header = () => {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <Heading as="h1">Take Five</Heading>
      <Nav />
    </Box>
  );
};

export default Header;
