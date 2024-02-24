// React Imports
// Chakra UI Imports
import { Box, Text, Link} from '@chakra-ui/react';

// Components
import { Nav } from './Nav';
import takeFiveLogo from '../../assets/take-five-logo.png';
import ReactRouterLink from 'react-router-dom/Link';

const Footer = () => {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <Link as={ReactRouterLink} to="/">
        <img src={takeFiveLogo} alt="Take Five Logo" width="100" height="100" />
      </Link>
      <Text>
        <span>&#169;</span> 2024 Burger, Engstrom, and Scragg
      </Text>
      <Nav />
    </Box>
  );
};

export default Footer;
