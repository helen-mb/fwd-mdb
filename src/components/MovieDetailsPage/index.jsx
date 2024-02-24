//react import
import { useEffect, useState } from 'react';
//chakra imports
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
//components
import { useParams } from 'react-router-dom';
import { StaticBanner } from '../StaticBanner';
import { FavouritesButton } from '../FavouritesButton';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const runtime = movieDetails ? movieDetails.runtime : null;


// Define formatRuntime function
const formatRuntime = (runtime) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h${minutes}m`;
};

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=en-US&api_key=${import.meta.env.VITE_REACT_APP_TMDB_API_KEY}`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <Text>Loading...</Text>;
  }

  const { genres } = movieDetails; // Destructure genres here

  const castCredits = ({ id, character, name }) => (
    <ListItem key={character + id}>
      {character}: {name}
    </ListItem>
  );

  const crewCredits = ({ id, job, name }) => (
    <ListItem key={job + id}>
      {job}: {name}
    </ListItem>
  );

  return (

<Box mt={4} p={4} bg="gray.100" borderRadius="md">
  <StaticBanner movieId={id}>
    {/* StaticBanner content */}
    <Box>
      <Box position="absolute" left="10%" top="30%">
        <Heading >{movieDetails.title}</Heading>

        <Box display="flex" flexDirection="column">
          {/* certification */}
          <Box display="flex" flexDirection="row">
            <Box flex="none">
              <p>{movieDetails.certification || 'N/A'}</p>
            </Box>
            {/* Year */}
            <Box flex="none" ml={2}>
              <p>{movieDetails.release_date && movieDetails.release_date.substring(0, 4)}</p>
            </Box>
            {/* Runtime */}
            <Box flex="none" ml={2}>
              <p>{runtime ? formatRuntime(runtime) : 'N/A'}</p>
            </Box>
          </Box>

          <Box>
          {' '}
          {genres && Array.isArray(genres)
            ? genres
                .slice(0, 4)
                .map((genre) => genre.name)
                .join(', ')
            : 'N/A'}
        </Box>

          <Box display="flex" flexDirection="row">
            <FavouritesButton movieId={movieDetails.id} />
            <Box ml={2}>
              <p>{movieDetails.vote_average.toFixed(1) } </p>
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  </StaticBanner>

  <div> {/* Add a parent element */}

    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
    
    <Text>Tagline: {movieDetails.tagline}</Text>

    <Text>Synopsis: {movieDetails.overview} </Text>

    <Heading>Cast Credits</Heading>
    <UnorderedList>{movieDetails.credits.cast.map(castCredits)}</UnorderedList>
    <Heading>Crew Credits</Heading>
    <UnorderedList>{movieDetails.credits.crew.map(crewCredits)}</UnorderedList>
  </div> {/* Close the parent element */}
</Box>

  );
};

export default MovieDetailsPage;
