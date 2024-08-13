import { Grid, Typography } from '@mui/material';
import { PokemonDetails } from './PokemonList';
import { Item } from './PokemonCard';
import { AddRemoveBtn } from './Button';

type Props = {
  mySquad: PokemonDetails[];
  removeFromSquad: (pok: PokemonDetails) => void;
};

function MySquad({ mySquad, removeFromSquad }: Props) {
  return (
    <Grid container spacing={2} justifyContent='center'>
      {mySquad.map((pokemon) => (
        <Grid item xs={3} key={pokemon.id}>
          <Item>
            <>
              <img src={pokemon.sprite} alt={pokemon.name} />
              <Typography
                variant='h6'
                component='h2'
                style={{
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  paddingTop: '.7rem',
                }}
              >
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </Typography>
              <Typography style={{ fontSize: '.8rem' }}>
                {pokemon.move.charAt(0).toUpperCase() + pokemon.move.slice(1)}
              </Typography>
              <Typography style={{ fontSize: '.8rem' }}>
                Level {pokemon.level}
              </Typography>
            </>
            <AddRemoveBtn
              isAdded={true}
              handleClick={() => removeFromSquad(pokemon)}
            />
          </Item>
        </Grid>
      ))}
    </Grid>
  );
}

export { MySquad };
