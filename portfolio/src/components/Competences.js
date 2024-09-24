import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaBootstrap, FaDatabase, FaGit, FaLinux, FaJsSquare } from 'react-icons/fa';
import { SiKubernetes, SiMysql, SiFigma, SiTrello, SiSlack, SiOdoo, SiExpress } from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';

const icons_competences = {
  'HTML': <FaHtml5 color="#e34c26" />,
  'CSS': <FaCss3Alt color="#1572b6" />,
  'JavaScript (ES6)': <FaJsSquare color="#f7df1e" />,
  'React': <FaReact color="#61dafb" />,
  'Node.js': <FaNodeJs color="#8cc84b" />,
  'PHP': <FaPhp color="#8993be" />,
  'Bootstrap': <FaBootstrap color="#563d7c" />,
  'MongoDB': <FaDatabase color="#4db33d" />,
  'Git': <FaGit color="#f05032" />,
  'Linux': <FaLinux color="#fcc624" />,
  'SQL (MySQL)': <SiMysql color="#4479a1" />,
  'Kubernetes': <SiKubernetes color="#326ce5" />,
  'Figma': <SiFigma color="#f24e1e" />,
  'Trello': <SiTrello color="#0079bf" />,
  'Slack': <SiSlack color="#4a154b" />,
  'Odoo': <SiOdoo color="#8143ac" />,
  'Express': <SiExpress color="#000000" />,
  'Vue.js': <FontAwesomeIcon icon={faVuejs} color="#4FC08D"  />,
};

const competences = [
  'HTML', 'CSS', 'JavaScript (ES6)', 'React', 'Node.js', 'PHP', 
  'Bootstrap', 'MongoDB', 'Git', 'Linux', 'SQL (MySQL)', 'Kubernetes', 
  'Figma', 'Trello', 'Slack', 'Odoo', 'Express', 'Vue.js'
];

const Competences = () => {
  return (
    <Container>
      <Box my={4}
      // my: prop pour définir la marge verticale (top et bottom)
      >
        <Typography 
          variant="h4" 
          gutterBottom
          // gutterBottom: pour ajouter un espace sous le texte
          textAlign="center">
          Compétences
        </Typography>

        <Box my={4}>
          <Typography variant="h5" gutterBottom align="center">
            Compétences Clés
          </Typography>
          <Grid container spacing={2}>
            {competences.slice(0, 6).map((title, index) => (
              <Grid item xs={12} sm={4} md={2} key={index} display="flex" flexDirection="column" alignItems="center">
                <Box mb={1} sx={{ fontSize: 48 }}>
                  {icons_competences[title]}
                </Box>
                <Typography variant="body2" textAlign="center">
                  {title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box my={4}>
          <Typography variant="h5" gutterBottom align="center">
            Compétences Supplémentaires
          </Typography>
          <Box sx={{ overflow: 'hidden', position: 'relative', height: 150 }}>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: 'linear'
              }}
              style={{ 
                display: 'flex',
                whiteSpace: 'nowrap'
              }}
            >
              {competences.slice(6).map((title, index) => (
                <Box key={index} display="flex" flexDirection="column" alignItems="center" sx={{ mx: 2 }}>
                  <Box mb={1} sx={{ fontSize: 48 }}>
                    {icons_competences[title]}
                  </Box>
                  <Typography variant="body2" textAlign="center">
                    {title}
                  </Typography>
                </Box>
              ))}
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Competences;