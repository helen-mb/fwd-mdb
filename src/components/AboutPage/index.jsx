// React Imports
import { useEffect } from 'react';
// Chakra UI Imports
import { Box, Text, Heading } from '@chakra-ui/react';
// Components
import { StaticBanner } from '../StaticBanner';

export const AboutPage = () => {
  useEffect(() => {
    document.title = 'About | Take Five';
  }, []);

  return (
    <>
      <StaticBanner />
      <Box p={4}>
        <Heading as="h1" size="xl" mb={2}>About Take Five</Heading>
        <Text fontSize="lg" mb={4}>and the Movie Database API</Text>
        
        <Box mb={8}>
          <Heading as="h2" size="lg" mb={4}>What is Take Five?</Heading>
          {/* Logo component */}
          <Text mb={4}>
            Scene Dock is a web-app designed to help you keep your movie watch-list up-to-date and organized. Stay on top of what movies are new and popular and add movies to your list where you can track what you have and have not yet seen.
          </Text>
        </Box>
        
        <Box mb={8}>
          <Heading as="h2" size="lg" mb={4}>What is the Movie Database?</Heading>
          {/* Logo component */}
          <Text mb={4}>
            Scene Dock gets all its movie data and images from The Movie Database (TMDB), a community-built movie and TV database. The TMDB API (application programming interface) is a system that allows Scene Dock to programmatically keep its information up-to-date. Read more about TMDB on their website.
          </Text>
        </Box>
        
        {/* Disclaimer section */}
        <Text mb={4}>
          Disclaimer: [Your disclaimer text goes here]
        </Text>
      </Box>
    </>
  );
};
