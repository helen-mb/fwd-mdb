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

export const MovieCard = (props) => {
  const [showQuickInfo, setShowQuickInfo] = useState(false);
  const linkPath = `/movie-details/${props.movie.id}`;
  return (
    <>
      <LinkBox
        m={1}
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
        // overflow={'hidden'}
      >
        <LinkOverlay position="relative" as={Link} to={linkPath}>
          <Image
            w="100%"
            objectFit={'cover'}
            src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
            alt={props.movie.title}
          />
        </LinkOverlay>
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
            <MovieQuickInfo movie={props.movie} />
          </Box>
        </Fade>
      </LinkBox>
    </>
  );
};
