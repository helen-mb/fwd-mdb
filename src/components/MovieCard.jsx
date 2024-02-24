// React Imports
import { useState } from 'react';
import { Link } from 'react-router-dom';
// Chakra UI Imports
import { LinkBox, LinkOverlay, Image, Box, Fade } from '@chakra-ui/react';
// Components
import { MovieQuickInfo } from './MovieQuickInfo';

// Card is a link box with link overlay leading to the movie details page
// (see Chakra UI Link Overlay)
// the "as" prop turns the Chakra Ui element into a React Router Link element.
// NOTE: the path to movie details page ("to") will probably be something like:
// to = "/movie-details/:id" using dynamically generated "id"

export const MovieCard = (movie) => {
  const [showQuickInfo, setShowQuickInfo] = useState(false);
  const linkPath = `/movie-details/${movie.movie.id}`;
  return (
    <>
      <LinkBox
        m={1}
        _hover={() => {
          console.log('hola');
        }}
        borderWidth="1px"
        rounded="md"
        onMouseEnter={() => {
          setShowQuickInfo(true);
        }}
        onMouseLeave={() => {
          setShowQuickInfo(false);
        }}
        onFocus={() => {
          setShowQuickInfo(true);
        }}
        onBlur={() => {
          setShowQuickInfo(false);
        }}
      >
        <LinkOverlay position="relative" as={Link} to={linkPath} />
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.movie.poster_path}`}
          alt={movie.movie.title}
        />
        {/* on hover: */}
        <Fade in={showQuickInfo}>
          <Box
            background="rgba(0,0,0,0.7)"
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            color="white"
            p="3"
          >
            <MovieQuickInfo movie={movie.movie} />
          </Box>
        </Fade>
      </LinkBox>
    </>
  );
};
