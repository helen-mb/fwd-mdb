// MovieQuickInfo.jsx
import { Box, Heading, Text } from '@chakra-ui/react';
import { MovieInformationButton } from './MovieInformationButton';
import { FavouritesButton } from './FavouritesButton';

export const MovieQuickInfo = ({ movie }) => {
  const { id, title, vote_average, release_date, overview } = movie;

  return (
    <Box>
      <Heading as="h3" size={2}>
        {title}
      </Heading>
      <Text>Rating: {vote_average.toFixed(1)}</Text>
      <Text>Year: {release_date && release_date.substring(0, 4)}</Text>
      {/* <Text>Runtime: {runtime ? formatRuntime(runtime) : 'N/A'}</Text>
      <Text>
        Genres:{' '}
        {genres && Array.isArray(genres)
          ? genres
              .slice(0, 4)
              .map((genre) => genre.name)
              .join(', ')
          : 'N/A'}
      </Text> */}
      <Text noOfLines={4}>Synopsis: {overview}</Text>
      <MovieInformationButton movieId={id} />
      <FavouritesButton movieId={id} />
      {/* Add My List link */}
    </Box>
  );
};
