// React Imports
// Chakra UI Imports
import { Box, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
// Components
import { NavLink } from 'react-router-dom';

// This nav may need to be converted into a Chakra UI Menu element?

export const Nav = () => {
  function blur(e) {
    e.target.blur();
  }
  return (
    <Box as="nav" className="main-nav" onClick={blur}>
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
    </Box>
  );
};
