import React, { useEffect, useState } from "react";
import photo from "../images/photo.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";

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
      <section id="home">
        <div className="lg:max-w-lg lg:w-full pt-20 md:w-1/2 w-5/6 flex items-center justify-center m-auto">
          <img
            className="rounded-md shadow border-white mt-20"
            alt="Picture of Andrew Krasuski"
            src={photo}
            width={"300px"}
            height={"300px"}
          />
        </div>

        <div className="flex flex-col items-center h-full">
          <div className="w-full max-w-3xl px-4">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-700 text-left mt-10">
              HELLO. I'M ANDREW.
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-left">
              I AM A SOFTWARE ENGINEER.
            </h1>
          </div>
        </div>

        <div className="flex pb-4 justify-center gap-3 items-center sm:flex-row flex-col">
          <a
            className="group no-underline bg-blue-400 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-blue-900 active:scale-105 transition"
            href="#contact"
            title="Contact me"
          >
            Contact me here
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-transform duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              ></path>
            </svg>
          </a>

          <a
            className="group no-underline text-white bg-blue-400 hover:bg-blue-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
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

          <div className="flex">
            <a
              className="mr-3 p-4 hover:bg-blue-900 bg-blue-600 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
              href="https://www.linkedin.com/in/andrew-krasuski/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white" size={25} />
            </a>

            <a
              className="mr-3 p-4 hover:bg-blue-900 bg-blue-600 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
              href="https://github.com/andrew5701"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white" size={25} />
            </a>
          </div>
        </div>

        {/* <div className="flex justify-center text-white">
          <a
            href="#aboutme"
            onClick={(event) => {
              handleClick(event, "aboutme");
            }}
          >
            <div
              style={{
                height: "100px",
                width: "5px",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            />
          </a>
        </div> */}
      </section>
    </>
  );
}
