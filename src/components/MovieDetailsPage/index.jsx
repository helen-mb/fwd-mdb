import { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_REACT_APP_TMDB_API_KEY
        }`);
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

  return (
    <Box mt={4} p={4} bg="gray.100" borderRadius="md">
      {/* Display movie details */}
    </Box>
  );
};

export default MovieDetailsPage;
