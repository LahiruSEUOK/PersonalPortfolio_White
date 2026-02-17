import { ArrowRight } from 'lucide-react';
import flowSuite from '../assets/flowSuite.svg';
import SaaSPayroll from '../assets/SaaSPayroll.svg';
import cenziosLMS from '../assets/cenziosLMS.svg';

export const Projects = () => {
  const projects = [
    {
      id: 'Project 01',
      title: 'FlowSuite',
      description: 'Manufacturing workflow management platform reducing production cycle time by 75%.',
      role: 'Project Manager & Solution Designer',
      duration: '6 Months',
      team: '8 Members',
      image: flowSuite,
    },
    {
      id: 'Project 02',
      title: 'SaaS Payroll',
      description: 'Cloud-based payroll solution for SMEs with centralized employee management.',
      role: 'PM, BA & Solution Designer',
      duration: '2 Months',
      team: '5 Members',
      image: SaaSPayroll,
    },
    {
      id: 'Project 03',
      title: 'Cenzios LMS',
      description: 'Comprehensive LMS platform reducing administrative overhead by 80%.',
      role: 'Project Manager & Solution Designer',
      duration: '8 Months',
      team: '10 Members',
      image: cenziosLMS,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="bg-[#F8F9FA] rounded-[32px] p-6 lg:p-12 aspect-[4/3] flex items-center justify-center shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                  {project.id}
                </span>
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 font-medium">
                  <span>{project.role}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>{project.duration}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>{project.team}</span>
                </div>

                <div className="pt-4">
                  <a
                    href="#"
                    className="text-[#007AFF] hover:text-blue-700 font-semibold inline-flex items-center gap-2 group transition-colors"
                  >
                    Learn More
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
