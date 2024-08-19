import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Competences from './components/Competences';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Formation from './components/Formation';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/formation" element={<Formation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
