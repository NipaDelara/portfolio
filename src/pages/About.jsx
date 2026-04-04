function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Git",
    "Responsive Design",
  ];

  return (
    <section
      id="about"
      className="bg-[#0f172a] text-white py-20 px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-orange-400 text-sm uppercase tracking-[0.2em] mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get to know me better
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-7">
            I am a passionate full-stack developer with a strong interest in
            building clean, responsive, and user-friendly web applications. I
            enjoy turning ideas into real digital experiences that are both
            functional and visually appealing.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-5 text-orange-400">
              Who I Am
            </h3>
            <p className="text-gray-300 leading-8 mb-4">
              Hello! I’m <span className="font-semibold text-white">Delara Nipa</span>, 
              a full-stack developer with a background in ICT and a completed
              vocational degree in full-stack development.
            </p>
            <p className="text-gray-300 leading-8 mb-4">
              I am especially interested in front-end development because I love
              creating beautiful interfaces and smooth user experiences. At the
              same time, I also enjoy working on back-end functionality to build
              complete web solutions.
            </p>
            <p className="text-gray-300 leading-8">
              I am currently looking for an internship opportunity where I can
              improve my skills, gain real-world experience, and contribute to
              meaningful projects.
            </p>
          </div>

          {/* Right Side */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-5 text-orange-400">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-400/20 text-sm text-orange-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Goals */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-5 text-orange-400">
                My Goal
              </h3>
              <p className="text-gray-300 leading-8">
                My goal is to grow as a developer, build impactful projects, and
                become part of a team where I can learn, collaborate, and create
                meaningful digital products.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
       {/* Bottom CTA */}
<div className="mt-14 text-center">
  <h3 className="text-xl font-semibold mb-6">Let’s Connect</h3>

  <div className="flex justify-center gap-4 flex-wrap">
    <a
      href="https://www.linkedin.com/in/delara-nipa-2b13a5232/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
    >
      LinkedIn
    </a>

    <a
      href="https://github.com/NipaDelara"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
    >
      GitHub
    </a>

    <a
      href="/cv_nipa.pdf"
      download
      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
    >
      Download CV
    </a>
  </div>
</div>
      </div>
    </section>
  );
}

export default About;
