// index.js

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import PokemonFetcher from './PokemonFetcher';

const App = () => {
  const [pokemons,setPokemons]=useState([])
  const fetchpk = ()=>{
  fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
            console.log(response);
            setPokemons(response.results)

        }).catch(err=>{
            console.log(err);
        });
      }


  return (
    <div>
      <h1>Pokemon Fetcher</h1>
      <button onClick={fetchpk}>fetch pk</button>
      <ul>
      {pokemons.map((p)=> <li>{p.name}</li> )}
      </ul>
 
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
