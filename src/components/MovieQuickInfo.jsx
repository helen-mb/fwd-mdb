// MovieQuickInfo.jsx
import { Box, Heading, Text, HStack } from '@chakra-ui/react';
import { MovieInformationButton } from './MovieInformationButton';
import { FavouritesButton } from './FavouritesButton';
import { StarIcon } from '@chakra-ui/icons';
export const MovieQuickInfo = ({ movie }) => {
  const { id, title, vote_average, release_date, overview } = movie;

  return (
    <Box position={'absolute'} bottom={3}>
      <Heading as="h3" noOfLines={3}>
        {title}
      </Heading>
      <HStack>
        <Text>{release_date && release_date.substring(0, 4)}</Text>
        <StarIcon />
        <Text>{vote_average.toFixed(1)}</Text>
      </HStack>
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
      <Text noOfLines={5}>{overview}</Text>
      <MovieInformationButton movieId={id} />
      <FavouritesButton movieId={id} />
      {/* Add My List link */}
    </Box>
  );
};
