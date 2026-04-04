function Stats() {
  const stats = [
    { number: "10+", label: "Projects" },
    { number: "95%", label: "Commitment" },
    { number: "1+", label: "Years Learning" },
  ];

  return (
    <section className="grid grid-cols-3 gap-6 mt-8">
      {stats.map((item, index) => (
        <div key={index}>
          <h3 className="text-2xl font-bold text-white">{item.number}</h3>
          <p className="text-sm text-gray-400 mt-1">{item.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;