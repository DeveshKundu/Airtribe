import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Button color="inherit">Products</Button>
        <Button color="inherit">Pricing</Button>
        <Button color="inherit">Blog</Button>
      </Toolbar>
    </AppBar>
  );
}
