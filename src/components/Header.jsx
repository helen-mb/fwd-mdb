// React Imports
// Chakra UI Imports
import { Box } from '@chakra-ui/react';
// Components
import { Nav } from './Nav';
// import takeFiveLogo from 'add in correct path';

const Header = () => {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      {/* <img src={takeFiveLogo} alt="Take Five Logo" width="100" height="100" /> */}
      <Nav />
    </Box>
  );
};

export default Header;
