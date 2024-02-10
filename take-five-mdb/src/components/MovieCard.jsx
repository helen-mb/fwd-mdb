// React Imports
import { Link } from 'react-router-dom';
// Chakra UI Imports
import { LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
// Components
import { MovieQuickInfo } from './MovieQuickInfo';

// Card is a link box with link overlay leading to the movie details page
// (see Chakra UI Link Overlay)
// the "as" prop turns the Chakra Ui element into a React Router Link element.
// NOTE: the path to movie details page ("to") will probably be something like:
// to = "/movie-details/:id" using dynamically generated "id"

export const MovieCard = () => {
  return (
    <>
      <LinkBox maxW="sm" p="5" borderWidth="1px" rounded="md">
        <LinkOverlay as={Link} to="/movie-details/:id"></LinkOverlay>
        <Text>This box is a link to the Movie Details Page.</Text>
        {/* Poster */}
        {/* on hover: */}
        <MovieQuickInfo>
          <Synopsis />
          <ButtonSection />
        </MovieQuickInfo>
      </LinkBox>
    </>
  );
};
