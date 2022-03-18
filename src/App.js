import './App.css';
import React, { useState } from 'react';
import axios from "axios";

function App() {

  // state vars
  const [pokemon, setPokemon] = useState([])

  const fetchPokemon = () => {
    // console.log("click")
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1127")
      .then(res => {
        return res.json()
      }).then(jsonRes => {
        console.log(jsonRes.results);
        setPokemon(jsonRes.results);
        console.log(pokemon);
      }).catch(someErr => console.log(someErr))
  }

  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=808")
    .then(res => {
      console.log(res.data.results);
      setPokemon(res.data.results);
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1> Pokemon </h1>
      <hr />
      <button onClick={fetchPokemon}>Catch Pokemon</button>
      <button onClick={axiosPokemon}>Catch Axios Pokemon</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemon.map((pokemon, i) => {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{pokemon.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
