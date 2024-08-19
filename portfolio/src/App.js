import Layout from './components/Layout';
import Home from './components/Home';
import Competences from './components/Competences';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout/>
      <Home />
      <Competences />
      <Projects />
      <Experiences />
    </div>
  );
}

export default App;
