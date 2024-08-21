import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Paper, Link as MUILink } from '@mui/material';
import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';
import project4 from '../assets/booki.webp';
import rse from '../assets/rse.webp';
import listeAction from '../assets/listeAction.webp';
import ZoomInIcon from '@mui/icons-material/ZoomIn';


const projectDetails = {
  'outil-ia-numerique-responsable': {
    title: 'Outil d’IA pour le numérique responsable',
    description: 'Un projet visant à développer des outils basés sur l’intelligence artificielle pour promouvoir des pratiques numériques responsables.',
    details: [
      {
        challenge: 'Création d\'un site web complet visant à intégrer les concepts de responsabilité sociétale des entreprises (RSE) dans les pratiques de l\'entreprise.',
        solution: 'Mise en place d\'un questionnaire intelligent, basé sur l\'Intelligence Artificielle et sur les sources officielles RGAA, WCAG.',
      },
      {
        challenge: 'Proposer une liste d\'action pertinente qui tient compte du contexte unique de chaque métier et projet pour des recommandations pertinentes',
        solution: (
          <span>
            Proposition d'une{' '}          
            <MUILink href={listeAction} target="_blank" rel="noopener noreferrer">
              liste d'action
            </MUILink> et qui s'appuie sur le développement d'un{' '}  
            <MUILink href={rse} target="_blank" rel="noopener noreferrer">
              prompt engineering avancé
            </MUILink>.
          </span>
        ),
      },
      {
        challenge: 'Mettre en place un site accessible et fonctionnel',
        solution: (
          <span>
            Mise en place d'une application complète (JavaScript, PHP et SQLite3). 
          </span>
        )
      }
    ],
    image: project1
  },
  'site-web-location-immobiliere': {
    title: 'Site web de location immobilière',
    description: 'Développement d’un site web complet pour la gestion des locations immobilières.',
    details: [
      {
        challenge: 'Initialiser une application avec Create React App',
        solution: 'J\'ai utilisé Create React App pour générer la structure initiale de l\'application, simplifiant ainsi la configuration de base. Cela inclut la création des fichiers de configuration, le réglage des dépendances et la mise en place d\'un environnement de développement React.'
      },
      {
        challenge: 'Configurer la navigation entre les pages de l\'application avec React Router',
        solution: 'J\'ai intégré React Router dans l\'application pour gérer la navigation entre les différentes pages. J\'ai défini des routes pour chaque composant de page et utilisé des composants comme <BrowserRouter>, <Route> et <Link> pour permettre une navigation fluide et efficace.'
      },
      {
        challenge: 'Développer des éléments de l\'interface d\'un site web grâce à des composants React',
        solution: 'J\'ai créé des composants React réutilisables pour structurer l\'interface utilisateur, en suivant les maquettes fournies.'
      }
    ],
    image: project2,
    GitHub: 'https://github.com/SamBen16/projet-React.git'
  },
  'back-end-evaluation-livres': {
    title: 'Back-end d\'un système d’évaluation de livres',
    description: 'Création du back-end pour un système d’évaluation et de gestion des livres.',
    details: [
      {
        challenge: 'Configurer un serveur avec Express et le connecter à une base de données MongoDB API RESTful robuste et évolutive pour répondre aux besoins des utilisateurs.',
        solution: 'J’ai installé Express et configuré le serveur en définissant les routes de base. Ensuite, j’ai utilisé Mongoose pour connecter l’application à la base de données MongoDB, en créant des schémas de données pour les livres...'
      },
      {
        challenge: 'Développer des modèles de données et implémenter des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour la gestion des livres et des notations, en assurant la sécurité des données.',
        solution: 'J’ai créé les modèles Mongoose pour les livres et les notations, puis j’ai implémenté des routes CRUD pour ces modèles.'
      }, 
      {
        challenge: 'Implémenter un système d’authentification sécurisé pour les utilisateurs.',
        solution: 'J’ai utilisé jsonwebtoken pour la gestion des tokens JWT et bcrypt pour le hachage des mots de passe. J’ai créé des routes pour l’inscription et la connexion des utilisateurs, avec des vérifications de sécurité pour protéger les informations sensibles.'
      }, 
      {
        challenge: 'Gérer le téléchargement et l’optimisation des images.',
        solution: 'J’ai utilisé multer pour gérer le téléchargement des images et sharp pour les optimiser.'
      }, 
    ],
    image: project3,
    GitHub: 'https://github.com/sam121110/mon-vieux-grimoire-v3.git'
  },
  'design-page-accueil-voyage': {
    title: 'Design d’une page d\'accueil d\'une agence de voyage',
    description: 'Design de la page d’accueil d’une agence de voyage avec un focus sur l’expérience utilisateur.',
    details: [
      {
        challenge: 'Implémenter une interface responsive avec HTML et CSS',
        solution: 'J\'ai utilisé les maquettes Figma pour créer une interface responsive en écrivant du code HTML et CSS. J\'ai employé des media queries pour adapter la mise en page aux différents appareils (mobile, tablette, desktop) afin d\'assurer une expérience utilisateur cohérente sur toutes les tailles d\'écran.'
      },
      {
        challenge: 'Intégrer du contenu conformément à une maquette avec HTML et CSS',
        solution: 'En suivant les maquettes Figma, j\'ai intégré le contenu en structurant correctement le HTML et en stylisant avec du CSS.'
      },
      {
        challenge: 'Versionner son projet avec Git et Github',
        solution: 'J\'ai initialisé un dépôt Git pour le projet et utilisé GitHub pour le versionnement. Cela m\'a permis de suivre les modifications et de gérer différentes versions du projet de manière organisée.'
      }
    ],
    image: project4,
    GitHub: 'https://github.com/SamBen16/projet2.git'
  }
};

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    setProject(projectDetails[id]);
  }, [id]);

  if (!project) {
    return (
      <Container>
        <Typography variant="h5">Projet non trouvé</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom textAlign="center">
          {project.title}
        </Typography>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Box 
            sx={{ 
              height: '300px', 
              overflow: 'hidden', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ 
                width: '50%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </Box>
          <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
              {project.description}
          </Typography>
          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
            <ZoomInIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
            Détails
          </Typography>
          <ul>
            {Array.isArray(project.details) && project.details.map((detail, index) => (
              <li key={index}>
                <Typography variant="body2"><strong>Défi :</strong> {detail.challenge}</Typography>
                <Typography variant="body2"><strong>Solution :</strong> {detail.solution}</Typography>
                <br />
              </li>
            ))}
          </ul>
          {project.GitHub && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" component="h2">
                GitHub 
              </Typography>
              <MUILink href={project.GitHub} target="_blank" rel="noopener noreferrer" variant="body2">
                {project.GitHub}
              </MUILink>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default Project;