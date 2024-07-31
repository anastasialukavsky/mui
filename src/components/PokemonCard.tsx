import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
type Props = {
  pokemon: {
    name: string;
    sprite: string;
    move: string;
    flingPower: number;
    level: number;
  };
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  textAlign: 'center',
  height: '150px',
  width: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.text.secondary,
}));

function PokemonCard({ pokemon }: Props) {
  console.log({ pokemon });
  const capitalizedName = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1);
  const capitalizedMove = (move: string) =>
    move.charAt(0).toUpperCase() + move.slice(1);
  return (
    <Grid item>
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
            {capitalizedName(pokemon?.name)}
          </Typography>
          <Typography style={{ fontSize: '.8rem' }}>
            {capitalizedMove(pokemon?.move)}
          </Typography>
          <Typography style={{ fontSize: '.8rem' }}>
            Level {pokemon?.level}
          </Typography>
        </>
      </Item>
    </Grid>
  );
}

export { PokemonCard };
