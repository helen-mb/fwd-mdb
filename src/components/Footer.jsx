// React Imports
// Chakra UI Imports
import { Box, Text, Flex, Spacer } from '@chakra-ui/react';

// Components
import { Nav } from './Nav';
import takeFiveLogo from '../assets/take-five-logo-remake.svg';
import {Link as ReactRouterLink} from 'react-router-dom';


const Footer = () => {
  return (
    <Box bgGradient="linear(to-t, brand.700, brand.800, brand.900)" w="100%" px={5} py={4}>
      <Flex direction="column" align="center" gap="1rem">
        <ReactRouterLink to="/">
          <img src={takeFiveLogo} alt="Take Five Logo" width="100" height="100" />
        </ReactRouterLink>
        <Nav />
        <Text color="brand.100" fontFamily="assistant.normal">
          <span>&#169;</span> 2024 Burger, Engstrom, and Scragg
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
