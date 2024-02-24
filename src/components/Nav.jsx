// React Imports
// Chakra UI Imports
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';
// Components
import { NavLink } from 'react-router-dom';
import navTextStyles from '../themes/nav-themes.jsx';

export const Nav = () => {
  function blur(e) {
    e.target.blur();
  }
  return (
    <Box as="nav" className="main-nav" onClick={blur}>
      <Flex gap={4}>
        <Link as={NavLink} to="/" fontFamily="assistant.bold" sx={navTextStyles}>
          Home
        </Link>

        <Link as={NavLink} to="/about" sx={navTextStyles} fontFamily="assistant.normal">
          About
        </Link>

        <Link as={NavLink} to="/my-list" sx={navTextStyles} fontFamily="assistant.normal">
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
