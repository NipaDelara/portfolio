function TechStack() {
  const techs = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "GitHub"];

  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12">
      <div className="border-t border-b border-white/10 py-4 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
        {techs.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </section>
  );
}

export default TechStack;