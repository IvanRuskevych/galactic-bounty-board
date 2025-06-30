import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Character {
  id: number;
  name: string;
  image: string;
  homeworld: string;
}

export interface StarWarsStore {
  characters: Character[];
  loading: boolean;
  error: string | null;
  fetchCharacters: () => void;
  getCharacterById: (id: number) => Character | undefined;
  reset: () => void;
}

export const useStarWarsStore = create<StarWarsStore>()(
  persist(
    (set, get) => (
      {
        characters: [],
        loading: false,
        error: null,
        
        fetchCharacters: async () => {
          set({loading: true, error: null})
          
          try {
            const res = await fetch(import.meta.env.VITE_STARWARS_URL)
            const data = await res.json()
            const top10 = data.slice(0, 10)
            set({characters: top10})
          } catch (err) {
            set({error: "Failed to load characters"});
          } finally {
            set({loading: false})
          }
        },
        
        getCharacterById: (id) => {
          return get().characters.find(item => item.id === id)
        },
        
        reset: () => {
          set(
            {
              characters: [],
              loading: false,
              error: null,
            },
          )
        },
      }
    ),
    
    {name: "star-wars-characters"},
  ),
);