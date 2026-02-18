import about from '../assets/BridgingStrategy.svg';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#333333] mb-6">
              Bridging Strategy and Execution
            </h2>
            <p className="text-[#9CA3AF] text-base sm:text-lg mb-4">
              With over 7 years of professional experience, including 3+ years
              dedicated to project management, and a B.Sc. in Software
              Engineering combined with an MBA in Project Management, I
              bridge the gap between business vision and technical execution.
            </p>
            <p className="text-[#9CA3AF] text-base sm:text-lg mb-6">
              I specialize in leading enterprise software initiatives, architecting
              scalable systems, and guiding cross-functional teams to deliver
              structured, measurable results.
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
              src={about}
              alt="Team collaboration"
              className="w-full rounded-2xl shadow-2xl object-cover h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
