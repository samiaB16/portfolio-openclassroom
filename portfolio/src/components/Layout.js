import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Layout({ children }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mon Portfolio Samia B
          </Typography>
          <Button color="inherit" component={Link} to="/">Accueil</Button>
          <Button color="inherit" component={Link} to="/about">À propos</Button>
          <Button color="inherit" component={Link} to="/competences">Compétences</Button>
          <Button color="inherit" component={Link} to="/projects">Projets</Button>
          <Button color="inherit" component={Link} to="/experiences">Expériences</Button>
          <Button color="inherit" component={Link} to="/formation">Formation</Button>
        </Toolbar>
      </AppBar>
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;