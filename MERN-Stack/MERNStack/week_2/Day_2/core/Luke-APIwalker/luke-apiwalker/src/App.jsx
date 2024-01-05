// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CharacterSearch from './components/CharacterSearch';
import CharacterDetails from './components/CharacterDetails';
import PlanetDetails from './components/PlanetDtail';
import PlanetSearch from './components/PlanetSearch';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharacterSearch />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/planets" element={<PlanetSearch />} />
          <Route path="/planets/:id" element={<PlanetDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Welcome to Star Wars API Explorer!</h2>
    </div>
  );
};

export default App;
