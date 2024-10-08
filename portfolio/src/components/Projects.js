import React from 'react';
import { Typography, Container, Box, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';
import project4 from '../assets/project4.webp';

const projects = [
  { id: 'outil-ia-numerique-responsable', title: 'Outil d’IA pour le numérique responsable', image: project1, alt: 'Interface de l\'outil d’IA pour le numérique responsable' },
  { id: 'site-web-location-immobiliere', title: 'Site web de location immobilière', image: project2, alt: 'Page d\'accueil du site web de location immobilière' },
  { id: 'back-end-evaluation-livres', title: 'Back-end d\'un système d’évaluation de livres', image: project3, alt: 'Architecture du back-end pour l’évaluation de livres' },
  { id: 'design-page-accueil-voyage', title: 'Design d’une page d\'accueil d\'une agence de voyage', image: project4, alt: 'Maquette du design d\'une page d\'accueil pour une agence de voyage'  },
];

function Projects() {
  return (
    <Container>
      <Box my={4}
      // my: prop pour définir la marge verticale (top et bottom)
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          Projets Réalisés
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Link to={`/project/${project.id}`} style={{ textDecoration: 'none' }}>
                <motion.div 
                  // Lorsque l'utilisateur survole l'élément, il sera légèrement agrandi avec un facteur de mise à l'échelle de 1.05
                  whileHover={{ scale: 1.05 }} 
                  // Lorsque l'utilisateur clique sur l'élément, il sera légèrement rétréci avec un facteur de mise à l'échelle de 0.95
                  whileTap={{ scale: 0.95 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '250px',
                    }}
                  >
                    <Box
                      sx={{
                        height: '150px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.alt}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                    <Typography variant="h6" component="h3" sx={{ mt: 2, textAlign: 'center' }}>
                      {project.title}
                    </Typography>
                  </Paper>
                </motion.div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Projects;