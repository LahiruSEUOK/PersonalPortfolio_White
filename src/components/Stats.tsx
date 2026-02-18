export const Stats = () => {
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '120+', label: 'Projects Completed' },
    { value: '40+', label: 'Clients Served' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-semibold text-[#000000] mb-2">
                {stat.value}
              </div>
              <p className="text-[#1D1D1F] text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
