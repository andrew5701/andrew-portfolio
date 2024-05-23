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

const icons = [
  FaPython,
  FaJava,
  FaGithub,
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaReact,
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
    <div className="w-full bg-gradient-to-r from-purple-800 to-blue-800 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          arrows={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {icons.map((Icon, index) => (
            <div key={index} className="flex justify-center items-center p-5">
              <Icon size={80} className="text-white" />
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
      className="absolute left-0 z-10 text-white text-4xl"
    >
      {'<'}
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 text-white text-4xl"
    >
      {'>'}
    </button>
  );
};

export default Skills;