import React from 'react';
import { Typography, Container, Box, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';

const projects = [
  { id: 'outil-ia-numerique-responsable', title: 'Outil d’IA pour le numérique responsable', image: project1 },
  { id: 'site-web-location-immobiliere', title: 'Site web de location immobilière', image: project2 },
  { id: 'back-end-evaluation-livres', title: 'Back-end d\'un système d’évaluation de livres', image: project3 },
  { id: 'design-page-accueil-voyage', title: 'Design d’une page d\'accueil d\'une agence de voyage', image: project4 },
];

function Projects() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Projets Réalisés
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Link to={`/project/${project.id}`} style={{ textDecoration: 'none' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                        alt={project.title}
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