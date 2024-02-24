// React Imports
// Chakra UI Imports
import { Box, Flex, Spacer } from '@chakra-ui/react';

// Components
import { Nav } from './Nav';
import takeFiveLogo from '../assets/take-five-logo-remake.svg';
import {Link as ReactRouterLink} from 'react-router-dom';

const Header = () => {
  return (
    <Box bg="brand.900" w="100%" px={5} py={4}>
      <Flex align="center">
        <Box>
          <ReactRouterLink to="/">
            <img src={takeFiveLogo} alt="Take Five Logo" width="100" height="100" />
          </ReactRouterLink>
        </Box>
        <Spacer></Spacer>
        <Box>
          <Nav />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
