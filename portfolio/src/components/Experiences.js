import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import sg from '../assets/societe-generale.webp';
import agpm from '../assets/agpm.webp';

const experiences = [
  {
    company: 'Société Générale Assurance',
    title: 'Développeuse en alternance',
    period: 'Septembre 2023 - Septembre 2024',
    logo: sg,
    tasks: [
      'Développement d’outils web utilisant Vue.js, PHP',
      'Optimisation de l\'intelligence artificielle avec des stratégies de prompt engineering avancées',
      'Utilisation de technologies et d’outils avancés (Kubernetes, Git, Linux, etc.)',
      'Mise en conformité de l’accessibilité des interfaces (RGAA)',
    ],
  },
  {
    company: 'Groupe AGPM',
    title: 'Manageuse en Assurance',
    period: 'Février 2020 - Mars 2023',
    logo: agpm,
    tasks: [
      'Gestion et coordination d\'une équipe de 5 conseillers en assurance',
      'Amélioration des processus de service client et formation des équipes à la conduite du changement',
    ],
  },
  {
    company: 'Société Générale Assurance',
    title: 'Responsable Adjointe',
    period: 'Novembre 2018 - Février 2020',
    logo: sg,
    tasks: [
      'Supervision des opérations quotidiennes et soutien à la direction, contribuant à l’optimisation des processus internes',
    ],
  },
  {
    company: 'Société Générale Assurance',
    title: 'Téléconseillère en Assurance Dommages',
    period: 'Janvier 2010 - Novembre 2018',
    logo: sg,
    tasks: [
      'Gestion des appels entrants et sortants pour des produits d\'assurance dommages, obtenant des taux de satisfaction client supérieurs à 90%',
    ],
  },
];

const Experience = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Expérience Professionnelle
        </Typography>
        <Grid container spacing={4}>
          {experiences.map((experience, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      style={{ height: '50px', marginRight: '16px' }}
                    />
                    <Box>
                      <Typography variant="h6" component="h3" sx={{ color: 'grey' }}>
                        <span style={{ color: '#1976d2', fontWeight: 'bold' }}>
                          {experience.period}
                        </span> @{experience.company}
                      </Typography>
                      <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 'bold' }}>
                        {experience.title}
                      </Typography>
                    </Box>
                  </Box>
                  <ul>
                    {experience.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Experience;