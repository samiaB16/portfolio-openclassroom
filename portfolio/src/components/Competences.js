import React from 'react';

const competences = [
    { title: 'HTML', description: 'Création de pages web structurées avec HTML5' },
    { title: 'CSS', description: 'Stylisation avancée avec CSS3 et préprocesseurs comme SASS' },
    { title: 'JavaScript (ES6)', description: 'Développement web avec JavaScript ES6' },
    { title: 'React', description: 'Développement d’applications interactives avec React' },
    { title: 'Node.js', description: 'Développement de serveurs et d’API avec Node.js' },
    { title: 'PHP', description: 'Création de back-ends dynamiques avec PHP' },
    { title: 'Bootstrap', description: 'Utilisation du framework Bootstrap pour des interfaces responsives et modernes' },
    { title: 'MongoDB', description: 'Gestion de bases de données NoSQL avec MongoDB' },
    { title: 'Vim', description: 'Éditeur de texte avancé pour le développement' },
    { title: 'Vue.js', description: 'Développement d’applications dynamiques avec le framework Vue.js' },
    { title: 'VS Code', description: 'Environnement de développement intégré de Microsoft' },
    { title: 'Kubernetes', description: 'Orchestration de conteneurs avec Kubernetes' },
    { title: 'Git', description: 'Contrôle de version avec Git' },
    { title: 'Linux', description: 'Système d’exploitation Linux' },
    { title: 'SQL (MySQL)', description: 'Gestion de bases de données relationnelles avec MySQL' },
    { title: 'Figma', description: 'Conception de designs avec Figma' },
    { title: 'Trello', description: 'Gestion de projets avec Trello' },
    { title: 'Slack', description: 'Communication d’équipe avec Slack' },
    { title: 'WordPress', description: 'Création de sites web avec WordPress' },
    { title: 'Odoo', description: 'ERP et CRM avec Odoo' },
    { title: 'Symfony', description: 'Framework PHP Symfony' },
    { title: 'Angular', description: 'Développement d’applications avec Angular' },
    { title: 'Express', description: 'Framework Node.js pour construire des applications web' },
    { title: 'SEO', description: 'Optimisation pour les moteurs de recherche' },
  ];

function Competences() {
    return (
      <>
        <h2>Compétences</h2>
        <ul>
            {competences.map((competence, index) =>
                <li key={index}>
                    <strong>{competence.title}:</strong>{competence.description}
                </li>
            )}
        </ul>
      </>
    );
  }
  
  export default Competences;
  