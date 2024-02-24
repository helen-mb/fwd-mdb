// React Imports
import { useEffect } from 'react';
// Chakra UI Imports
import { Box, Text, Heading } from '@chakra-ui/react';
// Components
import { StaticBanner } from '../StaticBanner';
import tmdbLogo from '../../assets/tmdb-logo.svg';
import takeFiveLogo from '../../assets/take-five-logo.svg';

export const AboutPage = () => {
  useEffect(() => {
    document.title = 'About | Take Five';
  }, []);

  return (
    <>
      <StaticBanner />
      <Box p={4} bg="gray.500">
        <Heading as="h1" size="xl" mb={2}>About Take Five</Heading>
        <Text fontSize="lg" mb={4}>and the Movie Database API</Text>
        
        <Box mb={8}>
          <Heading as="h2" size="lg" mb={4}>What is Take Five?</Heading>
          <img src={takeFiveLogo} alt="Take Five Logo" style={{width:'200px', height: '200px'}}/>
          <Text mb={4}>
            Scene Dock is a web-app designed to help you keep your movie watch-list up-to-date and organized. Stay on top of what movies are new and popular and add movies to your list where you can track what you have and have not yet seen.
          </Text>
        </Box>
        
        <Box mb={8}>
          <Heading as="h2" size="lg" mb={4}>What is the Movie Database?</Heading>
          <img src={tmdbLogo} alt="The Movie Database Logo" style={{width:'200px', height: '200px'}}/>
          <Text mb={4}>
            Scene Dock gets all its movie data and images from The Movie Database (TMDB), a community-built movie and TV database. The TMDB API (application programming interface) is a system that allows Scene Dock to programmatically keep its information up-to-date. Read more about TMDB on their website.
          </Text>
        </Box>
        
        {/* Disclaimer section */}
        <Text mb={4}>
          Disclaimer: This product uses the TMDb API but is not endorsed or certified by TMDb.
        </Text>
      </Box>
    </>
  );
};
