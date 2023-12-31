import FullPokemon from "@/Component/FullPokemon/fullPokemon";
import PokeList from "@/Component/PokeList/pokeList";

const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;

async function getData() {
  const response = await fetch(url);
  return response.json();
}

export default async function Home() {
  const pokemon = await getData();
  console.log("pokemon----->", pokemon);
  return (
    <main className="flex ">
      <div className="contain">
        <div className="home_page">
          <PokeList pokemon={pokemon} />
        </div>
        <div className="full_pokemon ">
          <FullPokemon />
        </div>
      </div>
    </main>
  );
}
