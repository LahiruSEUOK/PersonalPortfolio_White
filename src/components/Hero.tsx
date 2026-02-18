import { ArrowRight } from 'lucide-react';
import profile from '../assets/profile.svg';

export const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src={profile}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg border-4 border-blue-600"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#333333] mb-4">
          Lahir Sandeepa
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-2">
          Project Manager | Business Analyst | Solution Designer
        </p>

        <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          I transform ideas into strategic, results-driven solutions by combining business insight, technical expertise, and structured project delivery to create measurable impact.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg">
          Get In Touch
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};
