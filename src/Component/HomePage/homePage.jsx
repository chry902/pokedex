"use client";
import styles from "./styles.css";
import useStore from "@/app/store/useStore";
import { useEffect, useState } from "react";
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
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    getData("bulbasaur").then((data) => {
      setPokemonData(data);
      console.log("/////////////////////", data);
    });
  }, []);

  const getItem = (value) => {
    setSelectedItem(value);
    getData(value).then((data) => {
      setPokemonData(data);
      console.log("/////////////////////", data);
    });
  };
  const filteredPokemon = pokemon.results.filter(
    (item) =>
      item.name.includes(searchQuery.toLowerCase()) ||
      String(item.url.split("/")[6]).startsWith(searchQuery)
  );
  return (
    <div className="flex flex-col justify-center ">
      <div className="input_wrapper">
        <input
          className="input input-bordered input-warning w-full max-w-xs"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Bulbasour.... or #0001"
        />
      </div>
      <ul>
        {pokemon.results
          .filter(
            (item) =>
              item.name
                .toLowerCase()
                .trim()
                .includes(searchQuery.toLowerCase().trim()) ||
              String(item.url.split("/")[6]) === searchQuery
          )
          .map((item, index) => (
            <li
              className={`poke_name_wrapper ${
                item.name === selectedItem ? "selected" : ""
              }`}
              key={index}
              onClick={() => getItem(item.name)}
            >
              <div className="w-full flex justify-between flex-wrap">
                <p className=" poke_name ">{item.name.toUpperCase()}</p>
                <p>#{String(item.url.split("/")[6]).padStart(4, 0)}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HomePage;
