import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaReact,
  FaGithub,
} from 'react-icons/fa';
import { SiKotlin, SiC, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const icons = [
  { component: FaPython, link: 'https://www.python.org/' },
  { component: FaJava, link: 'https://www.java.com/' },
  { component: FaGithub, link: 'https://github.com/' },
  { component: FaHtml5, link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
  { component: FaJs, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { component: FaCss3Alt, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { component: FaReact, link: 'https://reactjs.org/' },
  { component: SiKotlin, link: 'https://kotlinlang.org/' },
  { component: SiC, link: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
  { component: SiTailwindcss, link: 'https://tailwindcss.com/' },
  { component: SiNextdotjs, link: 'https://nextjs.org/' },
];

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-blue-950 py-6 -mb-36 -mt-6">
      <div className="max-w-screen-xl mx-auto px-4 relative">
      <h1 className="font-light -mb-6 text-4xl text-center mt-20 text-white  -mb-4 font-bold mb-10 mt-4">
        SKILLS
      </h1>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          arrows={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {icons.map(({ component: Icon, link }, index) => (
            <div key={index} className="flex justify-center items-center p-5">
              <a href={link} target="_blank" rel="noopener noreferrer" className="font-bold transition-transform transform hover:scale-125">
                <Icon size={80} className="text-white" />
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 z-10 text-white text-4xl ml-2"
    >
      {'<'}
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 text-white text-4xl mr-2"
    >
      {'>'}
    </button>
  );
};

export default Skills;
