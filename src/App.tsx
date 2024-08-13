import { Box } from '@mui/material';
import { Navbar, PokemonList } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Box paddingTop={5} marginTop={10}>
        <PokemonList />
      </Box>
    </>
  );
}

export default App;

