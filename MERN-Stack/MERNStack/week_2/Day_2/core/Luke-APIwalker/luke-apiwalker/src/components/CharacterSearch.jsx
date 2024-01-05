// CharacterSearch.js

import React, { useState } from 'react';
import { Link, useEffect} from 'react-router-dom';

const CharacterSearch = () => {
  const history = useEffect();
  const [selectedResource, setSelectedResource] = useState('people');
  const [id, setId] = useState('');
  

  const handleResourceChange = (event) => {
    setSelectedResource(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = () => {
    history.push(`/characters/${id}`);
  };

  return (
    <div>
      <h2>Search for Star Wars Characters</h2>
      <label>
        Select Resource:
        <select value={selectedResource} onChange={handleResourceChange}>
          <option value="people">People</option>
          <option value="films">Films</option>
          {/* Add other resources here */}
        </select>
      </label>
      <br />
      <label>
        Enter ID:
        <input type="number" value={id} onChange={handleIdChange} />
      </label>
      <br />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default CharacterSearch;
