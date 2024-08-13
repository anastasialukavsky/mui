import axios from 'axios';
import { useState, useEffect } from 'react';
import { PokemonCard } from './PokemonCard';
import { Grid } from '@mui/material';
import { MySquad } from './MySquad';

export type PokemonDetails = {
  id: number;
  name: string;
  url: string;
  sprite: string;
  move: string;
  flingPower: number;
  level: number;
};

function PokemonList() {
  const [pokemonList, setPokemonList] = useState<PokemonDetails[]>([]);
  const [mySquad, setMySquad] = useState<PokemonDetails[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=151'
        );
        const results = data.results;

        const detailedResults = await Promise.all(
          results.map(async (pokemon: { url: string }) => {
            const pokemonData = await axios.get(pokemon.url);

            return {
              id: pokemonData.data.id,
              name: pokemonData.data.name,
              sprite: pokemonData.data.sprites.front_default,
              move: pokemonData.data.moves[0]?.move?.name || 'Unknown move',
              level: pokemonData.data.base_experience || 'Unknown level',
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

  const addToSquad = (pok: PokemonDetails) => {
    setMySquad((currentSquad) => {
      if (currentSquad.find((p) => p.id === pok.id)) {
        return currentSquad;
      } else {
        console.log('adding new pok', pok.id);
        setPokemonList((currentList) =>
          currentList.filter((p) => p.id !== pok.id)
        );
        return [...currentSquad, pok];
      }
    });
  };

  const removeFromSquad = (pok: PokemonDetails) => {
    setMySquad((currentSquad) => currentSquad.filter((p) => p.id !== pok.id));
    setPokemonList((currentList) => [...currentList, pok]);
  };

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
      {mySquad.length > 0 && (
        <MySquad mySquad={mySquad} removeFromSquad={removeFromSquad} />
      )}
      {pokemonList.map((pokemon) => (
        <div key={pokemon?.id}>
          <PokemonCard
            pokemon={pokemon}
            addToSquad={() => addToSquad(pokemon)}
            isAdded={false}
          />
        </div>
      ))}
    </Grid>
  );
}

export { PokemonList };
