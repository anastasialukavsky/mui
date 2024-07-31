import axios from 'axios';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { PokemonCard } from './PokemonCard';
import { Grid } from '@mui/material';

// type Pokemon = {
//   name: string;
// };

type PokemonDetails = {
  id: number;
  name: string;
  url: string;
  sprite: string;
  move:string;
  flingPower:number;
  level:number
};

function PokemonList() {
  const [pokemonList, setPokemonList] = useState<PokemonDetails[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=151'
        );
        const results = data.results;

        const detailedResults = await Promise.all(
          results.map(async (pokemon: PokemonDetails) => {
            const pokemonData = await axios.get(pokemon.url);

            return {
              name: pokemonData.data.name,
              sprite: pokemonData.data.sprites.front_default,
              move:pokemonData.data.moves[0].move.name,
              level: pokemonData.data.base_experience || 'Unknown level'
            };
          })
        );
        setPokemonList(detailedResults);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid
      container
      spacing={2}
      maxWidth='md'
      margin={'auto'}
      rowSpacing={4}
      columnSpacing={4}
      justifyContent='space-between'
    >
      {pokemonList.map((pokemon) => (
        <div key={pokemon?.id}>
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </Grid>
  );
}

export { PokemonList };
