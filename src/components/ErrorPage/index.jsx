// React Imports
import { useEffect } from 'react';
// Chakra UI Imports
import { Box, Text, Heading, Link, Flex, Spacer, Grid } from '@chakra-ui/react';
// Components
import { StaticBanner } from '../StaticBanner';
import {Link as RouterLink} from 'react-router-dom';
import navTextStyles from '../../themes/nav-themes.jsx';

export const ErrorPage = () => {
  useEffect(() => {
    document.title = 'Error | Take Five';
  }, []);

  return (
    <>
      <StaticBanner />
      <Box p={4}>
        <Heading as="h1" size="2xl" mb={2}>404</Heading>
        <Heading as="h2" size="lg" mb={4}>Oops! Page Not Found</Heading>
        <Text fontSize="lg" mb={8}>Sorry, the page you are looking for does not seem to exist. 
          <Link as={RouterLink} to="/" color="blue.500" ml={1}>Return to Home Page</Link>.
        </Text>
      </Box>
    </>
  );
};
