import { create } from "zustand";

const useStore = create((set) => ({
  pokemonData: [],
  pokeFullData: [],
  prova: "Cairo",
  fetchStatus: "",
  setPokemonData: (pokemonData) => set({ pokemonData }),
  setProva: (prova) => set({ prova }),
  setFetchStatus: (fetchStatus) => set({ fetchStatus }),
  setPokeFullData: (pokeFullData) => set({ pokeFullData }),
}));

export default useStore;
