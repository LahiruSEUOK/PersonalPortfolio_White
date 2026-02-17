export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Bridging Strategy and Execution
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-4">
              With over 3 years of experience in business strategy and digital transformation, I help organizations navigate complex challenges and unlock new opportunities.
            </p>
            <p className="text-gray-600 text-base sm:text-lg mb-6">
              My expertise spans project management, business analysis, solution architecture, and custom software development. I believe in creating sustainable solutions that drive real business value.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>Strategic planning and execution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>Cross-functional team leadership</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>Process optimization and automation</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600&fit=crop"
              alt="Team collaboration"
              className="w-full rounded-2xl shadow-2xl object-cover h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
