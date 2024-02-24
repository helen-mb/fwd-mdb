import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { MovieDetails } from '../pages/MovieDetails';
import { About } from '../pages/About';
import { MyList } from '../pages/MyList';
import { Error } from '../pages/Error';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import { DataContext } from '../Contexts';
import { Spinner, Flex, Center } from '@chakra-ui/react';

const categories = ['popular', 'top_rated', 'upcoming', 'now_playing'];
export const AppRouter = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // a function to call 4 categories of movie data
    const fetchMoviesByCategory = async () => {
      try {
        // captures promises from mapping through the categories list in an array
        const promises = categories.map(async (category) => {
          //saves the api call url in template literal for modular category selection
          const apiUrl = `https://api.themoviedb.org/3/movie/${category}?api_key=${
            import.meta.env.VITE_REACT_APP_TMDB_API_KEY
          }`;
          //fetching
          const response = await fetch(apiUrl);
          //saving the fetch query results
          const data = await response.json();
          //returns an object to store the array of movie data with its category
          return { category, movies: data.results };
        });
        //an array to store the above 4 objects
        const moviesData = await Promise.all(promises);
        //collect the data from the above 4 objects into one object
        const moviesByCategoryObj = {};
        moviesData.forEach(({ category, movies }) => {
          moviesByCategoryObj[category] = movies;
        });
        // final data is set in format of {catgory1: [movie data 1], category2: [movie data 2]...}
        setData(moviesByCategoryObj);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    //calls the above function to fetch and set the movie data
    fetchMoviesByCategory();
  }, []);

  //if there is not data, return empty fragment.
  // when the data exists, set up the context and the router.
  return (
    <DataContext.Provider value={data}>
      <BrowserRouter>
        <div className="siteWrapper">
          <Header />
          <main>
            {!data ? (
              <Flex minH="80vh">
                <Center w="100%">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                </Center>
              </Flex>
            ) : (
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/movie-details/:id" element={<MovieDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/my-list" element={<MyList />} />
                <Route path="*" element={<Error />} />
              </Routes>
            )}
          </main>
          {/* Footer component */}
          <Footer />
        </div>
      </BrowserRouter>
    </DataContext.Provider>
  );
};
