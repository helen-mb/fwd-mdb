import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { MovieDetails } from '../pages/MovieDetails';
import { About } from '../pages/About';
import { MyList } from '../pages/MyList';
import { Error } from '../pages/Error';
import Header from '../components/Header';
import { useEffect } from 'react';
import { useState } from 'react';
import { DataContext } from '../Contexts';

export const AppRouter = () => {
  const categories = ['popular', 'top_rated', 'upcoming', 'now_playing'];
  const [data, setData] = useState();

  useEffect(() => {
    const fetchMoviesByCategory = async () => {
      try {
        const promises = categories.map(async (category) => {
          const apiUrl = `https://api.themoviedb.org/3/movie/${category}?api_key=${
            import.meta.env.VITE_REACT_APP_TMDB_API_KEY
          }`;
          const response = await fetch(apiUrl);
          const data = await response.json();
          return { category, movies: data.results.slice(0, 6) };
        });
        const moviesData = await Promise.all(promises);
        const moviesByCategoryObj = {};
        moviesData.forEach(({ category, movies }) => {
          moviesByCategoryObj[category] = movies;
        });
        setData(moviesByCategoryObj);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMoviesByCategory();
  }, []);

  // useEffect(() => {
  //   // api call -> setData()
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //     },
  //   };
  //   const category = 'now_playing';
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1&api_key=${
  //       import.meta.env.VITE_REACT_APP_TMDB_API_KEY
  //     }`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     // .then((response) => console.log(response.results))
  //     .then((response) => setData(response.results))
  //     .catch((err) => console.error(err));
  // }, []);

  if (!data) {
    return <></>;
  }
  return (
    <DataContext.Provider value={data}>
      <BrowserRouter>
        <div className="siteWrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/movie-details/:id" element={<MovieDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/my-list" element={<MyList />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
          {/* Footer component */}
        </div>
      </BrowserRouter>
    </DataContext.Provider>
  );
};
