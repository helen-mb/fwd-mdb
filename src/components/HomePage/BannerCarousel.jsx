// React Imports
import { useContext, useEffect, useMemo, useState } from 'react';
// Chakra UI Imports
import { Box, Image } from '@chakra-ui/react';
// Components
import { MovieQuickInfo } from '../MovieQuickInfo';
import { DataContext } from '../../Contexts';
import { getUniqueMovieList } from '../../utils';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// https://react-multi-carousel.surge.sh/?selectedKind=Carousel&selectedStory=With%20infinite%20mode&full=0&addons=1&stories=1&panelRight=0&addonPanel=kadira%2Fjsx%2Fpanel
// https://www.npmjs.com/package/react-multi-carousel

export const BannerCarousel = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [imageWidth, setImageWidth] = useState(900);
  const movieData = useContext(DataContext);
  const uniqueMovieList = useMemo(() => {
    return getUniqueMovieList(movieData);
  }, [movieData]);
  const randomNumbers = useMemo(() => {
    let numbers = new Set();
    while (numbers.size < 3) {
      const number =
        Math.floor(Math.random() * (uniqueMovieList.length - 1)) + 1;
      // Only get movie index that has not already been added
      if (!numbers.has(number)) {
        numbers.add(number);
      }
    }

    return Array.from(numbers);
  }, [uniqueMovieList.length]);

  useEffect(() => {
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
    if (uniqueMovieList && uniqueMovieList.length > 0) {
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
    }
  }, [viewportWidth, uniqueMovieList, randomNumbers]);

  return (
    <>
      <Box position={'relative'}>
        <Carousel
          responsive={responsive}
          showDots={true}
          arrows={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={6000}
          swipeable
        >
          {randomNumbers.map((number) => {
            const backdropPath = uniqueMovieList[number].backdrop_path;
            return (
              <Box key={number}>
                <Image
                  src={`https://image.tmdb.org/t/p/w${imageWidth}/${backdropPath}`}
                  w="100%"
                  opacity="0.8"
                  draggable={false}
                />
                <Box
                  bgGradient="linear(to-r, brand.900, brand.900, #01010300)"
                  p="4"
                  color="white"
                  position="absolute"
                  top="0"
                  display="flex"
                  height="100%"
                  width="40%"
                >
                  <Box>
                    {/* would there be a way to make it so that below about 500px we nix the movie description from the carousel altogether? */}
                    <MovieQuickInfo movie={uniqueMovieList[number]} />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Carousel>
      </Box>
    </>
  );
};

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
