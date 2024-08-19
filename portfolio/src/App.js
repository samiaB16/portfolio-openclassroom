import Layout from './components/Layout';
import Home from './components/Home';
import Competences from './components/Competences';
import './App.css';


function App() {
  return (
    <div className="App">
      <Layout/>
      <Home />
      <Competences />
    </div>
  );
}

export default App;
