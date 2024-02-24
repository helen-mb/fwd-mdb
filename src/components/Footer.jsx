// React Imports
// Chakra UI Imports
import { Box, Text} from '@chakra-ui/react';

// Components
import { Nav } from './Nav';
import takeFiveLogo from '../assets/take-five-logo.svg';
import {Link as ReactRouterLink} from 'react-router-dom';


const Footer = () => {
  return (
    <Box bg="brand.900" w="100%" p={4} color="white">
      <ReactRouterLink to="/">
        <img src={takeFiveLogo} alt="Take Five Logo" width="100" height="100" />
      </ReactRouterLink>
      <Text>
        <span>&#169;</span> 2024 Burger, Engstrom, and Scragg
      </Text>
      <Nav />
    </Box>
  );
};

export default Footer;
