// React Imports
import { useEffect, useState } from 'react';
// Chakra UI Imports
import { Box, Text, Heading, Link, Flex, Grid } from '@chakra-ui/react';
// Components
import tmdbLogo from '../../assets/tmdb-logo.svg';
import takeFiveLogo from '../../assets/take-five-logo-remake.svg';
import { Link as RouterLink } from 'react-router-dom';
import navTextStyles from '../../themes/nav-themes.jsx';

export const AboutPage = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
    document.title = 'About | Take Five';
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  useEffect(() => {
    document.title = 'About | Take Five';
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  let adjustedHeight="auto";

  if(viewportHeight > 1024) {
    adjustedHeight = viewportHeight - 244;
  }


  // after having worked a few more pages tonight i know there's a much more efficient way to do this -
  // it's up to you guys if you want to change it to this {['1fr', etc...]}
  // i tried to work it but couldn't keep it from resetting back to original after a certain breakpoint
  
  let gridTempCol = "1fr";
  let gridTempRow = "0.5fr 1fr";
  let tmdbLogoWidth = "100%";
  let gap="1rem";
  let padding="5"

  if(viewportWidth > 500) {
    tmdbLogoWidth = "80%";
  }

  if(viewportWidth > 768) {
    gridTempCol = "0.5fr 2fr";
    gridTempRow = "1fr";
    tmdbLogoWidth = "70%";
  }

  if (viewportWidth > 1080) {
    gridTempCol = "0.5fr 3fr";
    padding = "8rem";
  }

  return (
    <>
      <Box bg="brand.900" color="brand.50" pb="4" minH={adjustedHeight}>
        <Flex direction="column" fontFamily="assistant.normal" borderTop="2px solid #ffffff22" borderBottom="2px solid #ffffff22" py="5" px={padding} gap="5" mb="5">
          <Heading as="h1" size="3xl" mb={2} fontFamily="assistant.normal">About Take Five</Heading>
          <Text fontSize="lg">and <Link href= "https://www.themoviedb.org/" isExternal sx={navTextStyles} borderBottom="2px solid #1962B6">the Movie Database API</Link></Text>
        </Flex>
        <Flex direction="column" gap="5" py="5">
          <Grid justify="center" gridTemplateColumns={gridTempCol} gridTemplateRows={gridTempRow} gap={gap} px={padding}>
            <Box >
              <Link as={RouterLink} to="/" >
                  <img src={takeFiveLogo} alt="Take Five Logo" width="100%" style={{ maxWidth: '150px' }}/>
              </Link>
            </Box>

            <Box >
              <Heading as="h2" fontSize="20" fontFamily="assistant.normal">What is Take Five?</Heading>
              <Text mb={50} maxW="60rem">
                Take Five is a web-app designed to help you keep your movie watch-list up-to-date and organized. Stay on top of what movies are new and popular and add movies to your list where you can track what you have and have not yet seen.
              </Text>
            </Box>
            
          </Grid>

          <Grid justify="center" gridTemplateColumns={gridTempCol} gridTemplateRows={gridTempRow} gap={gap} px={padding}>
            <Box >
              <Link href= "https://www.themoviedb.org/" isExternal>
                <img src={tmdbLogo} alt="The Movie Database Logo" width={tmdbLogoWidth} style={{ maxWidth: '100px' }}/>
              </Link>
            </Box>

            <Box >
              <Heading as="h2" fontSize="20" fontFamily="assistant.normal">What is the Movie Database?</Heading>
                <Text mb={4} maxW="60rem">
                  Take Five gets all its movie data and images from The Movie Database (TMDB), a community-built movie and TV database. The TMDB API (application programming interface) is a system that allows Take Five to programmatically keep its information up-to-date. Read more about TMDB on <Link href= "https://www.themoviedb.org/" isExternal sx={navTextStyles} borderBottom="2px solid #1962B6">their website</Link>.
                </Text>
            </Box>
            
          </Grid>
        </Flex>
        

        
        
        {/* Disclaimer section */}
        <Text align="center" border="2px solid #ffffff22" w="fit-content" p="3" m="15rem auto 0">
          Disclaimer: This product uses the TMDb API but is not endorsed or certified by TMDb.
        </Text>
      </Box>
    </>
  );
};
