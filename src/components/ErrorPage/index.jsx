// React Imports
import { useEffect, useState } from 'react';
// Chakra UI Imports
import { Box, Text, Heading, Link, Flex, Spacer, Grid } from '@chakra-ui/react';
// Components
import {Link as RouterLink} from 'react-router-dom';
import navTextStyles from '../../themes/nav-themes.jsx';

export const ErrorPage = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  useEffect(() => {
    document.title = 'Error | Take Five';
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let adjustedHeight= "auto";

  if(viewportHeight > 758) {
    adjustedHeight = viewportHeight - 244;
  }

  return (
    <>
      <Box px={4} py="5rem" bg="brand.900" textAlign="center" minH={adjustedHeight}>
          <Flex direction="column" align="center" gap="1rem">
            <Box>
              <Heading as="h1" fontSize="9xl" mb={2} color="brand.50">404</Heading>
              <Heading as="h2" size="lg" mb={4} color="brand.100">Oops! Page Not Found.</Heading>
              <Text fontSize="xl" mb={8} color="brand.100" mt="0" my="0.5rem">Sorry, the page you are looking for does not seem to exist.</Text>
            </Box>
            <Flex direction="column" gap="2rem">
              
              <Link as={RouterLink} to="/" fontSize="xl" sx={navTextStyles} fontFamily="assistant.bold">Return to Home Page</Link>.
            </Flex>
          </Flex>
      </Box>
    </>
  );
};
