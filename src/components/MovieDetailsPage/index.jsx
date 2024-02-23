import { useEffect, useState } from 'react';
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { MovieQuickInfo } from '../MovieQuickInfo';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // a function to make the api call for data about the movie
    const fetchMovieDetails = async () => {
      try {
        // fetching
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=en-US&api_key=${
            import.meta.env.VITE_REACT_APP_TMDB_API_KEY
          }`
        );
        // saving the data
        const data = await response.json();
        // setting state
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    // calling the above function
    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <Text>Loading...</Text>;
  }

  // collecting relevant cast credits to be printed
  const castCredits = ({ id, character, name }) => (
    <ListItem key={character + id}>
      {character}: {name}
    </ListItem>
  );
  // collecting relevant actor credits to be printed
  const crewCredits = ({ id, job, name }) => (
    <ListItem key={job + id}>
      {job}: {name}
    </ListItem>
  );

  return (
    // note!! The movie quick info pulls a lot of info automatically. We could always just pull directly from the api above for specific parts if we wanted.
    <Box mt={4} p={4} bg="gray.100" borderRadius="md">
      <Heading>{movieDetails.title}</Heading>
      {MovieQuickInfo({ movie: movieDetails })}
      <Text>Tagline: {movieDetails.tagline}</Text>
      <Heading>Cast Credits</Heading>
      <UnorderedList>
        {movieDetails.credits.cast.map(castCredits)}
      </UnorderedList>
      <Heading>Crew Credits</Heading>
      <UnorderedList>
        {movieDetails.credits.crew.map(crewCredits)}
      </UnorderedList>
    </Box>
  );
};

export default MovieDetailsPage;
