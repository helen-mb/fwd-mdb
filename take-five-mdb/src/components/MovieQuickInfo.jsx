// React Imports
import { Link } from 'react-router-dom';
// Chakra UI Imports
import { Box } from '@chakra-ui/react';
// React Imports
import { useEffect, useState } from 'react';
// Node Imports
import process from 'process';



// MovieQuickInfo is a component that fetches movie data from the TMDB API
export const MovieQuickInfo = ({ children }) => {
  const [movie, setMovie] = useState(null);

  // Function to format the runtime into hours and minutes
  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h${minutes}m`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = import.meta.env.VITE_REACT_APP_TMDB_API_KEY;
        const apiUrl = `https://api.themoviedb.org/3/movie/550?api_key=61d6a94f2887b4bf9c319ba63f923a1f`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      {/* Render movie information */}
      {movie && (
        <>
          {children}
          <h2>{movie.title}</h2>
          <p>Rating: {movie.vote_average}</p>
          <p>Year: {movie.release_date}</p>
          <p>Runtime: {formatRuntime(movie.runtime)}</p>
          <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
          <p>Synopsis: {movie.overview}</p>
        </>
      )}

      {/* Render My List link */}
      <Box as={Link} to="/my-list" color={'blue'} borderWidth={'1px'}>
        This link goes to My List (This is just testing nested links. It might need to be moved to a button component?)
      </Box>
    </Box>
  );
};