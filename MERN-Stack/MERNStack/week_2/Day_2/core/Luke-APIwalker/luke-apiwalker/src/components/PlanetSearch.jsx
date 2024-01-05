// PlanetSearch.js

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const PlanetSearch = () => {
  const history = useHistory();
  const [selectedResource, setSelectedResource] = useState('planets');
  const [id, setId] = useState('');

  const handleResourceChange = (event) => {
    setSelectedResource(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = () => {
    history.push(`/planets/${id}`);
  };

  return (
    <div>
      <h2>Search for Star Wars Planets</h2>
      <label>
        Select Resource:
        <select value={selectedResource} onChange={handleResourceChange}>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
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

export default PlanetSearch;
