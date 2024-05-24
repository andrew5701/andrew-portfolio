import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Skills from "../components/skills";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [arrowSize, setArrowSize] = useState(100);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 150) {
      setArrowSize(90);
    } else {
      setArrowSize(70);
    }
  }, [scrollPosition]);

  const handleClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section id="home" className="h-screen flex flex-col items-center justify-center relative">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/home_movie.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex justify-center mb-8">
          <div className="text-center">
            <h1 className="title-font sm:text-5xl text-1xl mb-4 font-medium text-blue-400">
              HELLO. I'M ANDREW.
            </h1>
            <h1 className="title-font sm:text-5xl text-1xl mb-4 font-medium text-white">
              I AM A SOFTWARE ENGINEER.
            </h1>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <motion.a
              className="no-underline relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              whileHover={{ scale: 1.1 }}
              href="/files/Andrew_Krasuski_Resume.pdf"
              download="Andrew_Krasuski_Resume.pdf"
            >
              DOWNLOAD RESUME
            </motion.a>

            <motion.button
              className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              whileHover={{ scale: 1.1 }}
              onClick={(event) => handleClick(event, "projects")}
            >
              SEE MY PROJECTS
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute w-full h-full border-2 border-white rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{
                    scale: 1.5,
                    opacity: [1, 0],
                    transitionEnd: { opacity: 0 },
                  }}
                  transition={{ duration: 0.6, delay: i * 0.2, repeat: Infinity }}
                />
              ))}
            </motion.button>
          </div>

          <div className="flex gap-4">
            <motion.a
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md  bg-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/andrew-krasuski/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-600" size={25} />
            </motion.a>

            <motion.a
              className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              whileHover={{ scale: 1.1 }}
              href="https://github.com/andrew5701"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-black" size={25} />
            </motion.a>
          </div>
        </div>
      </section>
      <Skills />
    </>
  );
}
