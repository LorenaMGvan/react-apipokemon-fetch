import React, { useState, useEffect } from "react";

export const Pokemon = () => {
  // creamons variables de estado para guardar pokemones
  const [pokemones, setPokemones] = useState([]);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  const [current, setCurrent] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0"
  );

  // usamons useEffect para hacer el llamado a la API
  // se ejecuta al inicio y cada que cambie un valor
  async function getPokemones() {
    const response = await fetch(current, []);
    const data = await response.json();
    console.log(data.results);
    setPokemones(data.results);
    setPrevious(data.previous);
    setNext(data.next);
  }

  useEffect(() => {
    getPokemones();
  }, [current]);

  const styleUlList = {
    padding: '0px',
  };
  
  const styleList = {
    listStyle: 'none',
    background: '#3827111c',
    marginBottom: '10px',
    padding: '10px 15px',
  };

  const styleButton = {
    background: '#1789d7',
    color: '#fff',
    borderRadius: '5px 3px',
    margin: '3px 5px',
  }

  return (
    <>
    <h2>Ejemplo Pokemones</h2>
      <ul style={styleUlList}>
        {pokemones.map((item, index) => (
          <li key={index} style={styleList}>
            {item.name}
        </li>
        ))}
      </ul>
      <button style={styleButton} onClick={() => previous !== null && setCurrent(previous)}>Anterior</button>
      <button style={styleButton} onClick={() => next !== null && setCurrent(next) }>Siguiente</button>
    </>
  );
};
