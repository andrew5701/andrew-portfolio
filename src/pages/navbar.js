import React from "react";
import photo from '../images/photo.jpg';
import { TypeAnimation } from 'react-type-animation';

export default function Navbar() {
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
      className=" flex w-[22rem] sm:w-auto flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white sm:flex-nowrap sm:gap-5"
    >
      <li 
        className="relative flex items-center justify-center h-full"
      >
        <a 
          className="flex items-center justify-center w-full px-2 py-3 text-white no-underline transition hover:text-gray-300"
          href="#home"
        >
          Home
        </a>
      </li>
      {/* Repeat for other list items */}
      <li 
        className="relative flex items-center justify-center h-full"
      >
        <a 
          className="flex items-center justify-center w-full px-2 py-3 text-white no-underline transition hover:text-gray-300"
          href="#about"
        >
          About
        </a>
      </li>
      {/* Add other list items for Volunteering, Experience, Contact, etc. */}

      <li 
        className="relative flex items-center justify-center h-full"
      >
        <a 
          className="flex items-center justify-center w-full px-2 py-3 text-white no-underline transition hover:text-gray-300"
          href="#experience"
        >
          Experience
        </a>
      </li>
      <li 
        className="relative flex items-center justify-center h-full"
      >
        <a 
          className="flex items-center justify-center w-full px-2 py-3 text-white no-underline transition hover:text-gray-300"
          href="#contact"
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