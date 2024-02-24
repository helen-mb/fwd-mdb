// React Imports
// Chakra UI Imports
import { Box, Grid, GridItem } from '@chakra-ui/react';

// Components
import { Nav } from './Nav';
import takeFiveLogo from '../assets/take-five-logo.svg';
import {Link as ReactRouterLink} from 'react-router-dom';

const Header = () => {
  return (
    <Box bg="brand.900" w="100%" p={4}>
      <ReactRouterLink to="/">
        <img src={takeFiveLogo} alt="Take Five Logo" width="100" height="100" />
      </ReactRouterLink>
      <Nav />
    </Box>
  );
};

export default Header;
