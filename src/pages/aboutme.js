import React from "react";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import photo from "../images/photo.jpg";

function AboutMe() {
  return (
    <section id="aboutme" className="py-10 px-4 sm:px-6 lg:px-8 bg-white mt-7">
      <div className="flex flex-col lg:flex-row items-center lg:justify-start w-full mt-8 lg:space-x-2 mx-auto">
        <div className="lg:w-1/2 flex justify-center">
          <img
            className="rounded-md shadow-lg border-gray-200 border-large mb-10 sm:mb-0"
            alt="Picture of Andrew Krasuski"
            src={"/images/andrew_linkedin.jpg"}
            width={"300px"}
            height={"300px"}
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-blue-700 text-3xl sm:text-4xl font-light font-extrabold font-bold mb-4 ml-12 text-left">
            ABOUT ME
          </h1>
          <p className="mb-5 text-left text-lg text-blue-700 px-5 lg:px-0 max-w-2xl text-base sm:text-lg">
            I am a software engineer with a five year background in Java,
            Python, and more. My experience spans from developing dynamic web
            applications to mobile applications, and I am well-versed in version
            control systems such as Git. When I'm not coding, I love biking,
            hiking, rock climbing, watching movies, and reading. With a lifelong
            passion for computers and mathematics, I am excited to continue
            learning and growing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
