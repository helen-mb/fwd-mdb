// React Imports
// Chakra UI Imports
import { Box } from '@chakra-ui/react';
// will have to add link to import once merged

// Components
import { Nav } from './Nav';
// import takeFiveLogo from 'add in correct path';
// import ReactRouterLink from 'react-router-dom/Link';

const Header = () => {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      {/* <Link as={ReactRouterLink} to="/">
        <img src={takeFiveLogo} alt="Take Five Logo" width="100" height="100" />
      </Link> */}
      <Nav />
    </Box>
  );
};

export default Header;
