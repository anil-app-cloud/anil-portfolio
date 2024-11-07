import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from './components/Home/home';
import Navbar from './components/navbar/navbar';
import MainFooter from './components/Footer/MainFooter';
import AboutMe from './components/Aboutme/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
    <div className='base'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<AboutMe />}/>
        <Route exact path="/contact" element={<ContactMe />}/>
        <Route exact path="/projects" element={<Projects />}/>
      </Routes>
      <MainFooter /> 
    </div>
  );
}

export default App;
