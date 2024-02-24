import { Box, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { MovieCard } from '../MovieCard';
import { DataContext } from '../../Contexts';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const CategorySection = () => {
  const movieData = useContext(DataContext);

  return (
    <Box>
      {Object.entries(movieData).map(([category, movies]) => (
        <Box key={category}>
          <Heading>{category}</Heading>
          <Carousel responsive={responsive}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Carousel>
        </Box>
      ))}
    </Box>
  );
};
