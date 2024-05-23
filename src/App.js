import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar.js";
import Home from "./pages/home.js";
import AboutMe from "./pages/aboutme.js";
import ProjectShowcase from "./pages/projects.js";
import ContactForm from "./components/contactme.js";
import Footer from "./components/footer.js";
import Nav from "./components/navbar.jsx";
import { NextUIProvider } from "@nextui-org/react";
import Experience from "./pages/experience.js";
import { useEffect } from "react";
import { Helmet } from "react-helmet";



function App() {
  // useEffect(() => {
  //   document.title = 'Andrew Portfolio';
  // }, []);

  return (
    <>
     
      <NextUIProvider>
      <Helmet>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <meta charSet="utf-8" />
        <title>Andrew Portfolio</title>
        <meta name="description" content="Andrew Krasuski Portfolio" />
      </Helmet>

        <Nav />
        <div className="App bg-gradient-to-r from-blue-800 to-blue-950">
          <div className="text-gray-400 div-background body-font md:-mt-20 -mt-32">
            <Home />
          </div>

          <ProjectShowcase />

          <Experience />
          <AboutMe />

          <ContactForm />

          <Footer />
        </div>
      </NextUIProvider>
    </>
  );
}

export default App;
