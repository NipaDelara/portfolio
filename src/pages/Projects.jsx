function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A modern online shopping website with product listing, cart, search, and responsive design.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      live: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Restaurant Booking App",
      description:
        "A user-friendly restaurant reservation app where users can explore restaurants and book tables easily.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "CSS", "Firebase"],
      live: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase skills, projects, and contact information in a professional way.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "Tailwind CSS"],
      live: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Task Management App",
      description:
        "A productivity app for managing daily tasks with add, edit, delete, and completion tracking features.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "Node.js", "MongoDB"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0f172a] text-white px-6 lg:px-12 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-orange-400 font-medium mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I have worked on. These projects
            reflect my skills in frontend and full-stack development.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="bg-orange-500/10 text-orange-400 border border-orange-400/20 px-3 py-1 rounded-full text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-medium transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/20 hover:border-orange-400 hover:text-orange-400 px-4 py-2 rounded-md text-sm font-medium transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;