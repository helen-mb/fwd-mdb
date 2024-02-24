// React Imports
// Chakra UI Imports
import { Box, Text, Flex, Spacer } from '@chakra-ui/react';

// Components
import { Nav } from './Nav';
import takeFiveLogo from '../assets/take-five-logo-remake.svg';
import {Link as ReactRouterLink} from 'react-router-dom';
import { bubbles, bubbleVariables } from '../themes/bubble-themes.jsx';


const Footer = () => {
  return (
    <Box bgGradient="linear(to-t, brand.700, brand.800, brand.900)" w="100%" px={5} py={4}>
      <Flex direction="column" align="center" gap="1rem">
        <ReactRouterLink to="/">
          <img src={takeFiveLogo} alt="Take Five Logo" width="100" height="100" />
        </ReactRouterLink>
        <Nav />
        <Text color="brand.100" fontFamily="assistant.normal" zIndex="99">
          <span>&#169;</span> 2024 Burger, Engstrom, and Scragg
        </Text>
      </Flex>
      <Box boxSize={bubbleVariables.size.larg} bg="brand.100" sx={bubbles} bottom="3rem"></Box>
      <Box boxSize={bubbleVariables.size.small} bg="brand.200" sx={bubbles} bottom="2.5rem"></Box>
      <Box boxSize={bubbleVariables.size.small} bg="brand.100" sx={bubbles} bottom="8rem" left="10rem"></Box>
      <Box boxSize={bubbleVariables.size.small} bg="brand.200" sx={bubbles} bottom="6rem" left="2.5rem"></Box>
      <Box boxSize={bubbleVariables.size.small} bg="brand.400" sx={bubbles} bottom="4rem" left="10rem"></Box>
      <Box boxSize={bubbleVariables.size.med} bg="brand.300" sx={bubbles} bottom="2.5rem" left="10.5rem"></Box>
      <Box boxSize={bubbleVariables.size.larg} bg="brand.300" sx={bubbles} bottom="0.5rem" left="5rem"></Box>
      <Box boxSize={bubbleVariables.size.med} bg="brand.300" sx={bubbles} bottom="1rem" right="15rem"></Box>
      <Box boxSize={bubbleVariables.size.xlarg} bg="brand.400" sx={bubbles} bottom="4rem" right="3rem"></Box>
      <Box boxSize={bubbleVariables.size.med} bg="brand.200" sx={bubbles} bottom="4rem" right="2rem"></Box>
      <Box boxSize={bubbleVariables.size.small} bg="brand.300" sx={bubbles} bottom="3.5rem" right="3.5rem"></Box>
      <Box boxSize={bubbleVariables.size.small} bg="brand.400" sx={bubbles} bottom="1rem" right="5.5rem"></Box>
    </Box>
  );
};

export default Footer;
