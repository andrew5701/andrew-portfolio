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
      <div className="flex flex-col lg:flex-row items-center justify-center w-full mt-8 lg:space-x-2 mx-auto">
        <div className="lg:w-1/2 flex justify-center">
          <img
            className="rounded-md shadow-lg border-gray-200 border-large "
            alt="Picture of Andrew Krasuski"
            src={"/images/andrew_linkedin.jpg"}
            width={"300px"}
            height={"300px"}
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-blue-700 text-3xl sm:text-4xl font-light font-extrabold mb-4">ABOUT ME</h1>
          <p className="mb-5 text-left text-lg text-blue-700 px-5 lg:px-0 max-w-2xl text-base sm:text-lg">
            A few words that describe me are passionate, hardworking, and dedicated. I am a software engineer with a strong background in Java, Python, and SQL. I have experience in developing web applications using HTML, CSS, and JavaScript. I am also familiar with version control systems like Git. I am excited to continue learning and growing as a software engineer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;