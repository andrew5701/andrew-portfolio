import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../images/ExampleCarouselImage.jpg";
import "../App.css";

function ProjectShowcase() {

  return (
    <section id="projects" className="px-6 lg:px-16 py-10">
      <h1 className="text-4xl text-center mt-20 text-white font-bold mb-10">
        Projects
      </h1>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        <div className="relative">
          <img
            src="/images/rmpccsu.png"
            alt="Rate My Professor CCSU"
            className="w-full h-auto"
          />
          <div className="bg-black bg-opacity-60 text-white p-4 w-full">
            <h3 className="text-lg font-bold">Rate My Professor CCSU</h3>
            <p>A website for rating your favorite Professors from Central Connecticut State University</p>
            <button
              onClick={() =>
                window.open("https://github.com/mrjasonwalton00/RateMyProfessor", "_blank")
              }
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Go to GitHub
            </button>
            <button
              onClick={() => window.open("https://project1.com", "_blank")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 mt-2"
            >
              View Live Demo
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/pokedex.png"
            alt="Gen 1 Pokédex"
            className="w-full h-auto"
          />
          <div className="bg-black bg-opacity-60 text-white p-4 w-full">
            <h3 className="text-lg font-bold">Gen 1 Pokédex</h3>
            <p>View information about your favorite Pokémon from generation 1.</p>
            <button
              onClick={() =>
                window.open("https://github.com/andrew5701/pokedex-gen1-database", "_blank")
              }
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Go to GitHub
            </button>
          </div>
        </div>

        <div className="relative">
        <video width="100%" height="auto" controls>
        <source src="/videos/ezeats.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          {/* <img
            src="/images/ezeats.png"
            alt="EZ Eats"
            
          /> */}
          <div className="bg-black bg-opacity-60 text-white p-4 w-full">
            <h3 className="text-lg font-bold">EZ Eats</h3>
            <p>Find the nearest restaurants in seconds on Android.</p>
            
            <button
              onClick={() => window.open("https://project3.com", "_blank")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 mt-2"
            >
              View Video
            </button>
          </div>
        </div>
        {/* Repeat for other projects... */}
      </div>
    </section>
  );
}

export default ProjectShowcase;
