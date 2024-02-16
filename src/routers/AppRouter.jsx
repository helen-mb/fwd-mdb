import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { MovieDetails } from '../pages/MovieDetails';
import { About } from '../pages/About';
import { MyList } from '../pages/MyList';
import { Error } from '../pages/Error';
import Header from '../components/Header';

export const AppRouter = () => {
  return (
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
  );
};
