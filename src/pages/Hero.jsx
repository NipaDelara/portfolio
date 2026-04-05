import profile from "../assets/profile.png";
import cv from "../assets/cv_nipa.pdf"

function Hero() {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-6 lg:px-12 pt-10 pb-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10"
    >
      <div>
        <p className="text-lg text-gray-300 mb-2">Hello,</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
          I’m Delara
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
          Full-Stack Developer
        </h3>

      
         

         {/* Bottom CTA */}
        <div className="mt-14 text-center flex flex-wrap gap-4">
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

      <div className="relative flex justify-center items-center mt-10 lg:mt-0">
        {/* Glow background */}
        <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-orange-500/20 blur-3xl"></div>

       

        {/* Dark inner circle */}
        <div className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full bg-[#111827]"></div>

        {/* Profile image */}
        <img
          src={profile}
          alt="Delara profile"
          className="relative z-10 w-[140px] md:w-[500px] object-cover rounded-full-"
        />
      </div>
    </section>
  );
}

export default Hero;