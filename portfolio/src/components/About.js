import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';
import myImage from '../assets/sam.webp';
import image1 from '../assets/image1.webp';
import image2 from '../assets/image2.webp';


const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box display="flex" alignItems="center" mb={4} sx={{ gap: 2 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <LazyLoad height={150} offset={100}>
            <Box component="img" src={myImage} alt="Samia" sx={{ width: 150, height: 150, borderRadius: '50%' }} />
            </LazyLoad>
        </motion.div>
        <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
          <Typography
            variant="h2"
            component="h1"
            color="primary"
            sx={{ 
              fontSize: {
                xs: '30px', 
                sm: '50px', 
              }
            }}
          >
            Samia B. 
            <br /> Développeuse Full Stack
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>
            <a href="mailto:samia.b@linkedin.com">samia.b@linkedin.com</a>
          </Typography>
        </motion.div>
      </Box>

      <Typography variant="h4" gutterBottom textAlign="center">
        À propos de moi
      </Typography>

      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                <LazyLoad height={150} offset={100}>
                  <Box component="img" src={image1} alt="Image 1" sx={{ width: 140, height: 150, borderRadius: 2, boxShadow: 3, transform: 'rotate(-5deg)' }} />
                </LazyLoad>
              </motion.div>
              <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}>
                <LazyLoad height={150} offset={100}>
                  <Box component="img" src={image2} alt="Image 2" sx={{ width: 140, height: 150, borderRadius: 2, boxShadow: 3, transform: 'rotate(5deg)', mt: 2 }} />
                </LazyLoad>
              </motion.div>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
              <Typography variant="h5">
                Hello, je suis Samia, développeuse web junior en reconversion professionnelle avec une solide expérience dans le domaine de l’assurance. Je suis dotée d’une excellente communication, d’un esprit d’équipe, et d’une rigueur exemplaire. Passionnée par les nouvelles technologies et le développement web, je passe aussi mon temps libre à explorer le monde et à faire du sport.
              </Typography>
   
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;