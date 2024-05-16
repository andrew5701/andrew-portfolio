import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Home from './pages/home.js';
import AboutMe from './pages/aboutme.js';
import ProjectShowcase from './pages/projects.js';
import ContactForm from './pages/components/contactme.js';






function App() {


  return (
    <>
    <div className='App bg-gradient-to-r from-blue-950 to-blue-800'>




    
    <div className='text-gray-400 div-background body-font'>
    
    <Home />
    </div>

    <AboutMe/>
    <ProjectShowcase/>
    
    <ContactForm/>
    
    
    </div>
    </>
  );
}

export default App;
