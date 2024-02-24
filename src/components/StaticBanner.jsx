// React Imports
import { useContext } from 'react';
// Chakra UI Imports
import { Box, Text } from '@chakra-ui/react';
// Components
import { DataContext } from '../Contexts';


export const StaticBanner = () => {

  const movieData = useContext(DataContext);
  for (const category in movieData) {
    movieData[category].forEach((movieItem) => {
      console.log(movieItem);
      //if movieItem.id === id of movie page
      //then grab movieItem.backdrop_path
    });
  }
// if the page has a movie id passed to it, then execute the above logic

//else

//us decorative backgoround


  return (
    <>
      {/* Hero Image */}
      <Box borderWidth={'1px'} bg={'lightblue'}>
        {/* Hero Image */}
        <Text>This is a banner. A hero image will go here.</Text>
        <Box>
          {/* Hero Ribbon: */}
          {/* Page Heading */}
          {/* conditionally rendered: MovieQuickInfo Component*/}
          {/* Page subheading */}
          {/* conditionally rendered: filter */}
        </Box>
      </Box>
    </>
  );
};
