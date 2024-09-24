import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, 
  useMediaQuery, // Hook pour gérer les requêtes média 
  useTheme // Hook pour accéder au thème
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Layout({ children }) {
  // utilisation d'un hook pour gérer l'état du menu burger (composant Drawer)
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Utilisation du thème Material-UI
  const theme = useTheme();

  // Détermine si l'affichage est sur un écran mobile (small ou plus petit)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // fonction pour ouvrir ou fermer le Drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Items de menu pour le Drawer
  const menuItems = [
    { text: 'Accueil', to: '/portfolio-openclassroom' },
    { text: 'Info', to: '/about' },
    { text: 'Compétences', to: '/competences' },
    { text: 'Projets', to: '/projects' },
    { text: 'Expériences', to: '/experiences' },
    { text: 'Formation', to: '/formation' },
  ];

  // Contenu du drawer
  const drawer = (
    <div>
      <List>
        {menuItems.map((item) => (
          <ListItem component={Link} to={item.to} key={item.text} onClick={toggleDrawer(false)}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mon Portfolio Samia B
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)} sx={{ ml: 1 }} aria-label='ouverture du menu'>  
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawer}
              </Drawer>
            </>
          ) : (
            menuItems.map((item) => (
              <Button color="inherit" aria-label={item.text} component={Link} to={item.to} key={item.text}>
                {item.text}
              </Button>
            ))
          )}
        </Toolbar>
      </AppBar>
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;