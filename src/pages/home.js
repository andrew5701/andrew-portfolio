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
      <section
        id="home"
        className="bg-cover bg-center h-screen flex flex-col items-center justify-center relative"
        style={{ backgroundImage: 'url("/images/home.jpeg")' }}
      >
        <div className="flex justify-center mb-8">
          <div className="text-left">
            <h1 className="title-font sm:text-5xl text-1xl mb-4 font-medium text-blue-400">
              HELLO. I'M ANDREW.
            </h1>
            <h1 className="title-font sm:text-5xl text-1xl mb-4 font-medium text-white">
              I AM A SOFTWARE ENGINEER.
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <a
            className="group no-underline text-white bg-blue-400 hover:bg-blue-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer mb-4"
            href="/files/Andrew_Krasuski_Resume.pdf"
            download="Andrew_Krasuski_Resume.pdf"
          >
            Download Resume
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="opacity-60 group-hover:opacity-100 group-hover:translate-y-1 transition-transform duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>

          <div className="flex gap-3 mb-4">
            <a
              className="p-4 hover:bg-blue-900 bg-blue-600 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
              href="https://www.linkedin.com/in/andrew-krasuski/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white" size={25} />
            </a>

            <a
              className="p-4 hover:bg-blue-900 bg-blue-600 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
              href="https://github.com/andrew5701"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white" size={25} />
            </a>
          </div>

          <motion.button
            className="relative  inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
      </section>
      <Skills />
    </>
  );
}
