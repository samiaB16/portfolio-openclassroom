import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Mon Portfolio Samia B</h1>
        <nav>
          <Link to="/">Accueil</Link><br />
          <Link to="/About">A propos</Link>
          <Link to="/competences">Compétences</Link><br />
          <Link to="/projects">Projets</Link><br />
          <Link to="/experiences">Expériences</Link><br />
          <Link to="/formation">Formation</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;