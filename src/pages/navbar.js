import React from "react";
import photo from '../images/photo.jpg';
import { TypeAnimation } from 'react-type-animation';

export default function Navbar() {
  const handleScroll = (event, targetId, offset = 0) => {
    event.preventDefault(); // Prevent the default anchor click behavior
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <div 
        className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full sm:w-[36rem] rounded-none border border-opacity-40 shadow-lg backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75" 
        style={{ opacity: 1 }}
      >
        <nav 
          className="flex justify-center w-full h-12 py-2"
        >
          <ul 
            className="flex w-[22rem] sm:w-auto flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white sm:flex-nowrap sm:gap-5"
          >
            <li 
              className="relative flex items-center justify-center h-full"
            >
              <a 
                className="flex items-center justify-center w-full px-2 py-3 text-white no-underline transition hover:text-gray-300"
       
                onClick={(e) => handleScroll(e, "#home", 1000)} // Adjust the offset value as needed
              >
                Home
              </a>
            </li>
            <li 
              className="relative flex items-center justify-center h-full"
            >
              <a 
                className="flex items-center justify-center w-full px-2 py-3 text-white no-underline transition hover:text-gray-300"

                onClick={(e) => handleScroll(e, "#about", 100)} // Adjust the offset value as needed
              >
                About
              </a>
            </li>
            <li 
              className="relative flex items-center justify-center h-full"
            >
              <a 
                className="flex items-center justify-center w-full px-2 py-3 text-white no-underline transition hover:text-gray-300"

                onClick={(e) => handleScroll(e, "#experience", 100)} // Adjust the offset value as needed
              >
                Experience
              </a>
            </li>
            <li 
              className="relative flex items-center justify-center h-full"
            >
              <a 
                className="flex items-center justify-center w-full px-2 py-3 text-white no-underline transition hover:text-gray-300"

                onClick={(e) => handleScroll(e, "#contact", 100)} // Adjust the offset value as needed
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
