import profile from "../assets/profile.png";

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
          Front-End Developer
        </h3>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-md text-sm font-medium"
          >
            Get in touch
          </a>
          <a
            href="/cv.pdf"
            className="border border-gray-500 hover:border-white px-5 py-2 rounded-md text-sm font-medium"
          >
            My resume
          </a>
        </div>
      </div>

      <div className="relative flex justify-center">
        <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full bg-orange-500/30 blur-3xl"></div>
        <div className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border border-orange-400/40"></div>

        <img
          src={profile}
          alt="Delara profile"
          className="relative z-10 w-[240px] md:w-[320px] object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;