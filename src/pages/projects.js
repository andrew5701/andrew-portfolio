import "../App.css";

function ProjectShowcase() {
  const projects = [
    {
      title: "Rate My Professor CCSU",
      src: "/images/rmpccsu.png",
      alt: "Rate My Professor CCSU",
      description:
        "A website for rating your favorite Professors from Central Connecticut State University.",
      github: "https://github.com/mrjasonwalton00/RateMyProfessor",
      live: "https://www.ratemyprofessorccsu.com/",
    },
    {
      title: "Gen 1 Pokédex",
      src: "/images/pokedex.png",
      alt: "Gen 1 Pokédex",
      description:
        "View information about your favorite Pokémon from generation 1.",
      github: "https://github.com/andrew5701/pokedex-gen1-database",
    },
    {
      title: "EZ-Eats",
      video: "/videos/ezeats.mp4",
      description: "Find the nearest restaurants in seconds on Android.",
      github: "https://github.com/username/project3",
    },
    {
      title: "The Two Man Job",
      src: "/images/two_man_job.png",
      alt: "The Two Man Job",
      description:
        "Illustrates the Shamir's Secret Sharing Algorithm when two keys are brought together, a secret video plays.",
      github: "https://github.com/giosroom99/Two-Man-Job",
    },
    {
      title: "Snake Game Multiplayer",
      src: "/images/snake_game.png",
      alt: "Snake Game Multiplayer",
      description:
        "A recreation of the popular Snake game with two player local multiplayer using the ncurses library in C.",
      github: "https://github.com/andrew5701/snake-game-multiplayer",
    },
    {
      title: "JavaScript Slot Machine",
      src: "/images/slots.png",
      alt: "JavaScript Slot Machine",
      description:
        "A simple slot machine game created using HTML, CSS, and JavaScript.",
      github: "https://github.com/andrew5701/web-slot-machine",
    },
  ];

  return (
    <section
      id="projects"
      className="px-6 bg-white lg:px-16 py-10"
      style={{ paddingTop: "3rem" }}
    >
      <h1 className="font-light text-4xl text-center text-blue-700 font-bold mb-10">
        MY PROJECTS
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            className="flex flex-col h-full rounded-md shadow-md border overflow-hidden"
            key={index}
          >
            <div className="aspect-[16/9] w-full">
              {project.video ? (
                <video className="w-full h-full object-cover" controls>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="flex flex-col justify-between bg-blue-800 text-white p-4 flex-grow">
              <div>
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Go to GitHub
                </button>
                {project.live && (
                  <button
                    onClick={() => window.open(project.live, "_blank")}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 mt-2 sm:mt-0"
                  >
                    View Live Demo
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectShowcase;
