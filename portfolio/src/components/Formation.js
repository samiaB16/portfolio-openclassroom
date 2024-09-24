import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import openclassrooms from '../assets/openclassrooms.webp';
import esa from '../assets/esa.webp';

const formations = [
  {
    title: 'Formation Développeur Web - OpenClassrooms (2023 - 2024)',
    logo: openclassrooms,
    details: [
      'Maîtrise des langages et frameworks : React.js, Node.js, MongoDB',
      'Optimisation SEO',
      'Gestion de projet et méthodologies Agile'
    ]
  },
  {
    title: 'Bac +2 Assurance - Ecole Supérieure des Assurances Paris',
    logo: esa
  }
];

const Formation = () => {  
  return (
    <Container>
      <Box my={4}
      // my: prop pour définir la marge verticale (top et bottom)
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          Formation
        </Typography>

        <Grid container spacing={4}>
          {formations.map((formation, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                // Lorsque l'utilisateur survole l'élément, il sera légèrement agrandi avec un facteur de mise à l'échelle de 1.02
                whileHover={{ scale: 1.02 }}
                // Lorsque l'utilisateur clique sur l'élément, il sera légèrement rétréci avec un facteur de mise à l'échelle de 0.98
                whileTap={{ scale: 0.98 }}
              >
                <Paper elevation={3} sx={{ padding: 2 }}>
                <Box display="flex" alignItems="center" mb={2}>
                    <img src={formation.logo} alt={`${formation.title} logo`} style={{ width:"90px", height: '60px', marginRight: '16px' }} loading="lazy"/>
                    <Box>
                      <Typography variant="h6" component="h3" sx={{ color: '#1976d2' , fontWeight: 'bold' }}>
                        {formation.title}
                      </Typography>
                    </Box>
                  </Box>
                  {formation.details && (
                    <ul>
                      {formation.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Formation;