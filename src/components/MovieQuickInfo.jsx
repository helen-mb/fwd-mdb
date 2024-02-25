// MovieQuickInfo.jsx
import { Box, Heading, Text, HStack } from '@chakra-ui/react';
import { MovieInformationButton } from './MovieInformationButton';
import { FavouritesButton } from './FavouritesButton';
import { StarIcon } from '@chakra-ui/icons';
export const MovieQuickInfo = ({ movie }) => {
  const { id, title, vote_average, release_date, overview } = movie;

  return (
    <Box position={'absolute'} bottom={0} p={3} left={0} right={0}>
      <Heading as="h3" noOfLines={3} fontSize={[20, 18, 20]}>
        {title}
      </Heading>
      <HStack>
        <Text size={'xs'}>{release_date && release_date.substring(0, 4)}</Text>
        <StarIcon />
        <Text>{vote_average.toFixed(1)}</Text>
      </HStack>
      <HStack spacing="1">
        <MovieInformationButton movieId={id} />
        <FavouritesButton movieId={id} />
      </HStack>
      <Text fontSize="sm" noOfLines={5}>
        {overview}
      </Text>
    </Box>
  );
};
