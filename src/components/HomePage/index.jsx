import { Box, Heading, HStack } from '@chakra-ui/react';
import { CategorySection } from './CategorySection';
import { BannerCarousel } from './BannerCarousel';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

export const HomePage = () => {
  return (
    <>
      <Box>
        <BannerCarousel />
        <Heading textAlign={'center'} m={5}>
          {/* Skip Links */}
          Discover
        </Heading>
        <HStack>
          <ChakraLink as={ReactRouterLink} to="#popular">
            Popular
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="#top_rated">
            Top Rated
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="#upcoming">
            Upcoming
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="#now_playing">
            Now Playing
          </ChakraLink>
        </HStack>
        <CategorySection />
      </Box>
    </>
  );
};
