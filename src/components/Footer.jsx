// React Imports
// Chakra UI Imports
import { Box, Text} from '@chakra-ui/react';
// Components
import { Nav } from './Nav';
// import takeFiveLogo from '../ass';

const Footer = () => {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      {/* <img src={takeFiveLogo} alt="Take Five Logo" width="100" height="100" /> */}
      <Text>
        <span>&#169;</span> 2024 Burger, Engstrom, and Scragg
      </Text>
      <Nav />
    </Box>
  );
};

export default Footer;
