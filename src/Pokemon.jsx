import React, { useState, useEffect } from "react";

export const Pokemon = () => {
  // creamons variables de estado para guardar pokemones
  const [pokemones, setPokemones] = useState([]);

  // usamons useEffect para hacer el llamado a la API
  // se ejecuta al inicio y cada que cambie un valor
  useEffect(() => {
    async function getPokemones() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0",
        []
      );
      const data = await response.json();
      setPokemones(data.results);
    }
    getPokemones();
  });

  return (
    <>
      <ul>
        {pokemones.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <button>Anterior</button>
      <button>Siguiente</button>
    </>
  );
};
