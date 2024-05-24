import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../images/ExampleCarouselImage.jpg";
import "../App.css";

function ProjectShowcase() {
  return (
    <section
      id="projects"
      className="px-6 bg-white lg:px-16 py-10 pt-1"
      style={{ paddingTop: "12rem" }}
    >
      <h1 className="font-light text-4xl text-center mt-20 text-blue-700 font-bold mb-10 mt-4">
        MY PROJECTS
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 ">
        <div className="relative ">
          <img
            src="/images/rmpccsu.png"
            alt="Rate My Professor CCSU"
            className="w-full h-auto rounded-t-md"
          />
          <div className="bg-blue-800 text-white p-4 w-full rounded-b-md">
            <h3 className="text-lg font-bold">Rate My Professor CCSU</h3>
            <p>
              A website for rating your favorite Professors from Central
              Connecticut State University
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/mrjasonwalton00/RateMyProfessor",
                  "_blank"
                )
              }
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Go to GitHub
            </button>
            <button
              onClick={() =>
                window.open("https://www.ratemyprofessorccsu.com/", "_blank")
              }
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
            className="w-full h-auto rounded-t-md"
          />
          <div className="bg-blue-800  text-white p-4 w-full rounded-b-md">
            <h3 className="text-lg font-bold">Gen 1 Pokédex</h3>
            <p>
              View information about your favorite Pokémon from generation 1.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/andrew5701/pokedex-gen1-database",
                  "_blank"
                )
              }
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Go to GitHub
            </button>
          </div>
        </div>

        <div className="relative">
          <video width="100%" height="auto" className="rounded-t-md" controls>
            <source src="/videos/ezeats.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <img
            src="/images/ezeats.png"
            alt="EZ Eats"
            
          /> */}
          <div className="bg-blue-800 text-white p-4 w-full rounded-b-md">
            <h3 className="text-lg font-bold">EZ-Eats</h3>
            <p>Find the nearest restaurants in seconds on Android.</p>
            <button
              onClick={() =>
                window.open("https://github.com/username/project3", "_blank")
              }
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Go to GitHub
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/pokedex.png"
            alt="The Two Man Job"
            className="w-full h-auto rounded-t-md"
          />
          <div className="bg-blue-800  text-white p-4 w-full rounded-b-md">
            <h3 className="text-lg font-bold">The Two Man Job</h3>
            <p>Illustrates the Shamir's Secret Sharing Algorithm when two keys are brought together, a secret video plays.</p>
            <button
              onClick={() =>
                window.open("https://github.com/giosroom99/Two-Man-Job", "_blank")
              }
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Go to GitHub
            </button>
          </div>
        </div>
        {/* Repeat for other projects... */}
      </div>
    </section>
  );
}

export default ProjectShowcase;
