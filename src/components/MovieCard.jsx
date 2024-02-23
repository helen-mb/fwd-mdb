// React Imports
import { Link } from 'react-router-dom';
// Chakra UI Imports
import { LinkBox, LinkOverlay, Image } from '@chakra-ui/react';
// Components
import { MovieQuickInfo } from './MovieQuickInfo';

// Card is a link box with link overlay leading to the movie details page
// (see Chakra UI Link Overlay)
// the "as" prop turns the Chakra Ui element into a React Router Link element.
// NOTE: the path to movie details page ("to") will probably be something like:
// to = "/movie-details/:id" using dynamically generated "id"

export const MovieCard = (movie) => {
  const linkPath = `/movie-details/${movie.movie.id}`;
  return (
    <>
      <LinkBox maxW="sm" p="5" borderWidth="1px" rounded="md">
        <LinkOverlay as={Link} to={linkPath}></LinkOverlay>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.movie.poster_path}`}
          alt={movie.movie.title}
        />
        {/* on hover: */}
        <MovieQuickInfo movie={movie.movie} />
      </LinkBox>
    </>
  );
};
