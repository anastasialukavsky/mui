import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navItems = ['ITEM', 'ITEM', 'ITEM'];
function Navbar() {
  return (
    <AppBar component='nav' style={{ backgroundColor: '#242424' }}>
      <Toolbar>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          POKEBASE
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export { Navbar };
