import './App.css';
import Header from "./Components/Header";
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Slider from "./Components/Slider";
import Footer from './Components/Footer';
import Testing from './Components/Testing';

function App() {
  return (
    <div className="App">
      <Testing/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
