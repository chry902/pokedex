"use client";
import styles from "./styles.css";
import useStore from "@/app/store/useStore";
import { useEffect } from "react";
async function getData(url) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${url}`);
  try {
    return response.json();
  } catch {
    console.error("Errore nella chiamata fullPokemon", response);
  }
}
const HomePage = ({ pokemon }) => {
  const { setPokemonData } = useStore();
  useEffect(() => {
    getData("bulbasaur").then((data) => {
      setPokemonData(data);
      console.log("/////////////////////", data);
    });
  }, []);

  const getItem = (value) => {
    getData(value).then((data) => {
      setPokemonData(data);
      console.log("/////////////////////", data);
    });
  };

  return (
    <ul>
      {pokemon.results.map((item, i) => (
        <li key={i} onClick={() => getItem(item.name)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
