import React from 'react';
import openclassrooms from '../assets/openclassrooms.png';
import esa from '../assets/esa.png';

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
        logo: esa,
        details: []
      }
];

function Formation() {
    return (
      <>
        <h2>Formation</h2>
        <ul>
            {formations.map((formation) => (
                <li key={formation.title}>
                    <h3>{formation.title}</h3>
                    <img src={formation.logo} alt={formation.title} style={{ width: '100px' }} />
                    <ul>
                        {formation.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
      </>
    );
}

  
  export default Formation;