export function StatsSection() {
  const stats = [
    {
      number: '11',
      label: 'Synergistic Ingredients',
    },
    {
      number: '5',
      label: 'Adaptogenic Mushrooms',
    },
    {
      number: '€2',
      label: 'Per Day',
    },
    {
      number: '100%',
      label: 'Dose Transparency',
    },
  ];

  return (
    <section className="bg-cream-800 py-20 relative">
      {/* Circles handled by adjacent sections */}

      <div className="container max-w-5xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 md:divide-x md:divide-cream-700">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-8">
              <div className="text-4xl md:text-5xl font-serif mb-3 text-cream-100">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-widest text-cream-400 font-thin">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
