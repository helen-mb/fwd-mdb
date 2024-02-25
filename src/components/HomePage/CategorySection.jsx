import { Box, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { MovieCard } from '../MovieCard';
import { DataContext } from '../../Contexts';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// https://react-multi-carousel.surge.sh/?selectedKind=Carousel&selectedStory=With%20infinite%20mode&full=0&addons=1&stories=1&panelRight=0&addonPanel=kadira%2Fjsx%2Fpanel
// https://www.npmjs.com/package/react-multi-carousel

export const CategorySection = () => {
  const movieData = useContext(DataContext);
  return (
    <Box>
      {Object.entries(movieData).map(([category, movies]) => {
        return (
          <Box key={category}>
            <Heading id={category}>{categoryTitleMap[category]}</Heading>
            <Carousel responsive={responsive}>
              {movies.map((movie) => {
                return (
                  <Box key={movie.id}>
                    <MovieCard movie={movie} />
                  </Box>
                );
              })}
            </Carousel>
          </Box>
        );
      })}
    </Box>
  );
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 12,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const categoryTitleMap = {
  popular: 'Popular',
  top_rated: 'Top Rated',
  upcoming: 'Upcoming',
  now_playing: 'Now Playing',
};
