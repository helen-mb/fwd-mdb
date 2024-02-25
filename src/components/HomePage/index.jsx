import { Box, Heading, HStack } from '@chakra-ui/react';
import { CategorySection } from './CategorySection';
import { BannerCarousel } from './BannerCarousel';
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
          <ChakraLink href="/#popular">Popular</ChakraLink>
          <ChakraLink href="/#top_rated">Top Rated</ChakraLink>
          <ChakraLink href="/#upcoming">Upcoming</ChakraLink>
          <ChakraLink href="/#now_playing">Now Playing</ChakraLink>
        </HStack>
        <CategorySection />
      </Box>
    </>
  );
};
