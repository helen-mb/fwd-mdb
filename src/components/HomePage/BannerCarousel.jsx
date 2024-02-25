// React Imports
import { useContext, useEffect, useState } from 'react';
// Chakra UI Imports
import { Box, Heading, Text, Image } from '@chakra-ui/react';
// Components
import { MovieQuickInfo } from '../MovieQuickInfo';
import { DataContext } from '../../Contexts';
import { getUniqueMovieList } from '../../utils';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { StaticBanner } from '../StaticBanner';
// https://react-multi-carousel.surge.sh/?selectedKind=Carousel&selectedStory=With%20infinite%20mode&full=0&addons=1&stories=1&panelRight=0&addonPanel=kadira%2Fjsx%2Fpanel
// https://www.npmjs.com/package/react-multi-carousel

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const BannerCarousel = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [imageWidth, setImageWidth] = useState(900);
  const movieData = useContext(DataContext);
  const [randomIndex, setRandomIndex] = useState(0);
  const [backdropPath, setBackdropPath] = useState('');

  useEffect(() => {
    setRandomIndex(
      Math.floor(Math.random() * (getUniqueMovieList(movieData).length - 1)) + 1
    );
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const movieList = getUniqueMovieList(movieData);
    if (movieList && movieList.length > 0) {
      if (viewportWidth < 600) {
        console.log('viewport < 600 now');
        setImageWidth(300);
      } else if (viewportWidth < 900) {
        console.log('viewport < 900 now');
        setImageWidth(780);
      } else {
        console.log('image set to 1280 now');
        setImageWidth(1280);
      }
      setBackdropPath(
        getUniqueMovieList(movieData)[randomIndex]['backdrop_path']
      );
    }
  }, [viewportWidth, randomIndex, movieData]);

  return (
    <>
      <Box position={'relative'}>
        <Carousel
          responsive={responsive}
          showDots={true}
          arrows={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          customTransition="all 1000ms ease-in-out"
          transitionDuration={5000}
        >
          <Box minH={20}>
            <Image
              src={`https://image.tmdb.org/t/p/w${imageWidth}/${backdropPath}`}
              w="100%"
            />
          </Box>
          <Box minH={20}>
            <Image
              src={`https://image.tmdb.org/t/p/w${imageWidth}/${backdropPath}`}
              w="100%"
            />
          </Box>
          <Box minH={20}>
            <Image
              src={`https://image.tmdb.org/t/p/w${imageWidth}/${backdropPath}`}
              w="100%"
            />
          </Box>
        </Carousel>
        <Box
          bg="rgba(0, 0, 0, 0.5)"
          p="4"
          color="white"
          position="absolute"
          display="flex"
          bottom="8"
          left="8"
          height="40%"
          width="40%"
        >
          <Box>
            <MovieQuickInfo
              movie={getUniqueMovieList(movieData)[randomIndex]}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
