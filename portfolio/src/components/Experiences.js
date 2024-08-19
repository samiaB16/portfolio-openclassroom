import React from 'react';
import sg from '../assets/societe-generale.png';
import agpm from '../assets/agpm.png';

const experiences = [
    { company: 'Société Générale Assurance', title: 'Développeuse en alternance', logo: sg, 
        tasks: [
        'Développement d’outils web utilisant Vue.js, PHP',
        'Optimisation de l\'intelligence artificielle avec des stratégies de prompt engineering avancées',
        'Utilisation de technologies et d’outils avancés (Kubernetes, Git, Linux, etc.)',
        'Mise en conformité de l’accessibilité des interfaces (RGAA)'
      ]
    },
    { company: 'Groupe AGPM', title: 'Manageuse en Assurance', logo : agpm,
        tasks: [
            'Gestion et coordination d\'une équipe de 5 conseillers en assurance',
            'Amélioration des processus de service client et formation des équipes à la conduite du changement'
            ]
    },
    { company: 'Société Générale Assurance', title: 'Responsable Adjointe', logo: sg,
        tasks: [
            'Supervision des opérations quotidiennes et soutien à la direction, contribuant à l’optimisation des processus internes'
          ]
    },
    { company: 'Société Générale Assurance', title: 'Téléconseillère en Assurance Dommages', logo: sg,
        tasks: [
            'Gestion des appels entrants et sortants pour des produits d\'assurance dommages, obtenant des taux de satisfaction client supérieurs à 90%'
          ]
    },
  ];

function Experiences() {
    return (
        <>
        <h2>Expériences Professionnelles</h2>
        <ul>
            {experiences.map((experience) => (
                <li key={experience.id}>
                    <strong>{experience.title}</strong>
                    <img src={experience.logo} alt={experience.title} style={{ width: '100px' }} />
                    <ul>
                        {experience.tasks.map((task, index) =>
                        <li key={experiences.task}>{task}</li>)}
                    </ul>
                </li>
            ))}
        </ul>
      </>
    );
}

  
  export default Experiences;