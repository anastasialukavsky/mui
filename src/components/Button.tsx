import { Button } from '@mui/material';
import { PokemonDetails } from './PokemonList';

type Props = {
  isAdded: boolean;
  handleClick: () => void;
};

function AddRemoveBtn({ isAdded, handleClick }: Props) {
  return (
    <Button
      variant='contained'
      onClick={handleClick}
      color={isAdded ? 'secondary' : 'primary'}
      style={{ backgroundColor: isAdded ? 'red' : 'green' }}
    >
      {isAdded ? 'Remove' : 'Add'}
    </Button>
  );
}

export { AddRemoveBtn };
