// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
      const pokemonData = response.data.results;
      setPokemonList(pokemonData);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchPokemon}>Fetch Pokemon</button>
        <div>
          <h2>Pokemon List:</h2>
          <ul>
            {pokemonList.map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;


