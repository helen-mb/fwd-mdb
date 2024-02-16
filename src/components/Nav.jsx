// React Imports
// Chakra UI Imports
// Components
import { NavLink } from 'react-router-dom';

// This nav may need to be converted into a Chakra UI Menu element?

export const Nav = () => {
  function blur(e) {
    e.target.blur();
  }
  return (
    <nav className="main-nav" onClick={blur}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/my-list">My List</NavLink>
        </li>
      </ul>
    </nav>
  );
};
