import React from 'react';
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
      <>
        <h2>
            Projets Réalisés
        </h2>
        <ul>
            {projects.map((project) =>
            <li key={project.id}>
                <h3>{project.title}</h3>
                <img src={project.image} alt={project.title} style={{ width: '100px' }}/>
            </li>
            )}
        </ul>
      </>
    );
  }
  
  export default Projects;
  