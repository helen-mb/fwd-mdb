// React Imports
import { Link } from 'react-router-dom';
// Chakra UI Imports
import { Box, Image } from '@chakra-ui/react';
// React Imports
import { useEffect, useState } from 'react';
// Node Imports




// MovieQuickInfo is a component that fetches movie data from the TMDB API
export const MovieQuickInfo = ({ children, isBanner = false }) => {
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
      {/* Render movie image */}
      {movie && (
        <>
          {isBanner && movie.backdrop_path && (
            <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
          )}
          {!isBanner && movie.poster_path && (
            <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          )}
        </>
      )}

      {/* Render movie information */}
      {movie && (
        <>
          {children}
          <h2>{movie.title}</h2>
          <p>Rating: {movie.vote_average}</p>
          <p>Year: {movie.release_date && movie.release_date.substring(0, 4)}</p>
            {/* year string only calculates first 4 items (the year) and deletes everything else */}
          <p>Runtime: {formatRuntime(movie.runtime)}</p>
          <p>Genres: {movie.genres.slice(0, 4).map(genre => genre.name).join(', ')}</p>
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