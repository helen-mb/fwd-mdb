// React Imports
import { Link } from 'react-router-dom';
// Chakra UI Imports
import { Box, Image } from '@chakra-ui/react';
// React Imports
import { useEffect, useState } from 'react';

//components
import { MovieInformationButton } from './MovieInformationButton';
import { FavouritesButton } from './FavouritesButton';

// MovieQuickInfo is a component that fetches movie data from the TMDB API
export const MovieQuickInfo = ({ children, isBanner = false, category }) => {
  const [movies, setMovies] = useState([]);

  const formatRuntime = (runtime) => {
    if (!runtime || isNaN(runtime)) return 'N/A';
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h${minutes}m`;
  };

   // Log the value of the category prop
   console.log('Category:', category);

   


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if category is defined before constructing the API URL
        if (category) {
          const apiUrl = `https://api.themoviedb.org/3/movie/${category}?api_key=61d6a94f2887b4bf9c319ba63f923a1f`;
            //fetches general {category} data from the TMDB API
          const response = await fetch(apiUrl);
          const data = await response.json();
          setMovies(data.results);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <Box>
      {/* Render movie information */}
      {movies && movies.map((movie) => (
        <Box key={movie.id}>
          {/* Render movie image */}
          {isBanner && movie.backdrop_path && (
            <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
          )}
          {!isBanner && movie.poster_path && (
            <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          )}

          {children}
          <h2>{movie.title}</h2>
          <p>Rating: {movie.vote_average.toFixed(1)}</p>
          <p>Year: {movie.release_date && movie.release_date.substring(0, 4)}</p>
          {/* year string only calculates first 4 items (the year) and deletes everything else */}
          <p>Runtime: {movie.runtime ? formatRuntime(movie.runtime) : 'N/A'}</p>
          <p>Genres: {movie.genres && Array.isArray(movie.genres) ? movie.genres.slice(0, 4).map(genre => genre.name).join(', ') : 'N/A'}</p>
          <p>Synopsis: {movie.overview}</p>

          {/* add information and add to favourites button */}
          <MovieInformationButton movieId={movie.id} />
          <FavouritesButton movieId={movie.id} />

          {/* Render My List link */}
          <Box as={Link} to="/my-list" color={'blue'} borderWidth={'1px'}>
            This link goes to My List (This is just testing nested links. It might need to be moved to a button component?)
          </Box>
        </Box>
      ))}
    </Box>
  );
};
