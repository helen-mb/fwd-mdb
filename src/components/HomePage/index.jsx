import { Box, Heading, HStack, Flex } from '@chakra-ui/react';
import { CategorySection } from './CategorySection';
import { BannerCarousel } from './BannerCarousel';
import { Link as ChakraLink } from '@chakra-ui/react';
import navTextStyles from '../../themes/nav-themes.jsx';

export const HomePage = () => {
  return (
    <>
      <Box bg="brand.900" color="brand.50" px="3">
        <BannerCarousel />
        <Heading textAlign={'center'} m={5} mb="2" color="brand.100">
          {/* Skip Links */}
          {/* I think there's probably a better way to style this section but my brain is fried lol, return to styling another time */}
          Discover
        </Heading>
        <Flex justify="space-evenly" mb="5">
            <ChakraLink href="/#popular" sx={navTextStyles} fontSize={['small', 'small', 'md', 'md', 'md', 'md']}>Popular</ChakraLink>
            <ChakraLink href="/#top_rated" sx={navTextStyles} fontSize={['small', 'small', 'md', 'md', 'md', 'md']}>Top Rated</ChakraLink>
            <ChakraLink href="/#upcoming" sx={navTextStyles} fontSize={['small', 'small', 'md', 'md', 'md', 'md']}>Upcoming</ChakraLink>
            <ChakraLink href="/#now_playing" sx={navTextStyles} fontSize={['small', 'small', 'md', 'md', 'md', 'md']}>Now Playing</ChakraLink>
        </Flex >
        <CategorySection />
      </Box>
    </>
  );
};
