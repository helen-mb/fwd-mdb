// MovieQuickInfo.jsx
import { Box, Heading, Text } from '@chakra-ui/react';
import { MovieInformationButton } from './MovieInformationButton';
import { FavouritesButton } from './FavouritesButton';

export const MovieQuickInfo = ({ movie }) => {
  const formatRuntime = (runtime) => {
    if (!runtime || isNaN(runtime)) return 'N/A';
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h${minutes}m`;
  };

  const { id, title, vote_average, release_date, runtime, genres, overview } =
    movie;

  const handleFavouriteChange = (isFavourited) => {
    // Handle favourite change here
    console.log(`Movie ${id} favourited status changed: ${isFavourited}`);
  };

  return (
    <Box>
      <Heading as="h3">{title}</Heading>
      <Text>Rating: {vote_average.toFixed(1)}</Text>
      <Text>Year: {release_date && release_date.substring(0, 4)}</Text>
      <Text>Runtime: {runtime ? formatRuntime(runtime) : 'N/A'}</Text>
      <Text>
        Genres:{' '}
        {genres && Array.isArray(genres)
          ? genres
              .slice(0, 4)
              .map((genre) => genre.name)
              .join(', ')
          : 'N/A'}
      </Text>
      <Text>Synopsis: {overview}</Text>
      <MovieInformationButton movieId={id} />
      <FavouritesButton
        movieId={id}
        onFavouriteChange={handleFavouriteChange}
        //this handle favourite change is necessary here for the favourites toggle button to work.
      />
      {/* Add My List link */}
    </Box>
  );
};
