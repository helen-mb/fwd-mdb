// React Imports
// Chakra UI Imports
import { Box, Text } from '@chakra-ui/react';
// Components
import { Nav } from './Nav';

const Footer = () => {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <Text>Take Five</Text>
      <Nav />
    </Box>
  );
};

export default Footer;
