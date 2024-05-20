import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Home from './pages/home.js';
import AboutMe from './pages/aboutme.js';
import ProjectShowcase from './pages/projects.js';
import ContactForm from './components/contactme.js';
import Footer from './components/footer.js';
import Nav from './components/navbar.jsx';
import {NextUIProvider} from "@nextui-org/react";
import Experience from './pages/experience.js';



function App() {


  return (

    

    <NextUIProvider>
      
    <Nav/>
    <div className='App bg-gradient-to-r from-blue-800 to-blue-950'>




    
    <div className='text-gray-400 div-background body-font md:-mt-20 -mt-32'>
    
    <Home />
    </div>

    <AboutMe/>
    <ProjectShowcase/>

    <Experience/>
    
    <ContactForm/>
    
    <Footer/>
    
    </div>
    </NextUIProvider>

  );
}

export default App;
