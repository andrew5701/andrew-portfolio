import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../images/ExampleCarouselImage.jpg";
import "../App.css";

function ProjectShowcase() {
  return (
<section id="projects" className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
  <h1 className="text-4xl text-center mt-20 text-white font-bold col-span-full">
    Projects
  </h1>
  
  <div className="relative">
    <img
      src="path-to-your-image.jpg"
      alt="Project 1"
      className="w-full h-auto"
    />
    <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-4 ">
      <h3 className="text-lg font-bold">Project 1</h3>
      <p>Project 1 description...</p>
      <button
        onClick={() =>
          window.open("https://github.com/username/project1", "_blank")
        }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Go to GitHub
      </button>
      <button
        onClick={() => window.open("https://project1.com", "_blank")}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 mt-2"
      >
        View Project
      </button>
    </div>
  </div>

  <div className="relative">
    <img
      src="path-to-your-image.jpg"
      alt="Project 1"
      className="w-full h-auto"
    />
    <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-4">
      <h3 className="text-lg font-bold">Project 1</h3>
      <p>Project 1 description...</p>
      <button
        onClick={() =>
          window.open("https://github.com/username/project1", "_blank")
        }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Go to GitHub
      </button>
      <button
        onClick={() => window.open("https://project1.com", "_blank")}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 mt-2"
      >
        View Project
      </button>
    </div>
  </div>

  <div className="relative">
    <img
      src="path-to-your-image.jpg"
      alt="Project 1"
      className="w-full h-auto"
    />
    <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-4">
      <h3 className="text-lg font-bold">Project 1</h3>
      <p>Project 1 description...</p>
      <button
        onClick={() =>
          window.open("https://github.com/username/project1", "_blank")
        }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Go to GitHub
      </button>
      <button
        onClick={() => window.open("https://project1.com", "_blank")}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 mt-2"
      >
        View Project
      </button>
    </div>
  </div>
  {/* Repeat for other projects... */}
</section>
  );
}

export default ProjectShowcase;
