// React Imports
// Chakra UI Imports
import { Box, Flex, Link } from '@chakra-ui/react';
// Components
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  function blur(e) {
    e.target.blur();
  }
  return (
    <Box as="nav" className="main-nav" onClick={blur}>
      <Flex>
        <Link as={NavLink} to="/" mr={4} fontWeight="bold">
          Home
        </Link>
        <Link as={NavLink} to="/about" mr={4}>
          About
        </Link>
        <Link as={NavLink} to="/my-list">
          My List
        </Link>
      </Flex>
    </Box>
  );
};

// this menu layout gives you a dropdown menu so we may need to use it for mobile

{/* <Box as="nav" className="main-nav" onClick={blur}>
<Menu>
  <MenuButton as={Text} cursor="pointer">
    Menu
  </MenuButton>
  <MenuList>
    <MenuItem>
      <NavLink to="/">Home</NavLink>
    </MenuItem>
    <MenuItem>
      <NavLink to="/about">About</NavLink>
    </MenuItem>
    <MenuItem>
      <NavLink to="/my-list">My List</NavLink>
    </MenuItem>
  </MenuList>
</Menu>
</Box> */}
