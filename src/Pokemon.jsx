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
  
  return (
    <>
      <ul>
        {pokemones.map((item, index) => (
          <li key={index}>
            {item.name}
        </li>
        ))}
      </ul>
      <button onClick={() => previous !== null && setCurrent(previous)}>Anterior</button>
      <button onClick={() => next !== null && setCurrent(next) }>Siguiente</button>
    </>
  );
};
