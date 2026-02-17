import { ArrowRight } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'FlowSuite',
      description: 'Comprehensive workflow management platform that streamlines business processes and improves team collaboration.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3588619/pexels-photo-3588619.jpeg?auto=compress&cs=tinysrgb&w=600&fit=crop',
    },
    {
      title: 'SaaS Payroll',
      description: 'Modern payroll management system with automated calculations, compliance tracking, and employee self-service portal.',
      technologies: ['Vue.js', 'Python', 'MySQL'],
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600&fit=crop',
    },
    {
      title: 'Cenzios LMS',
      description: 'Enterprise learning management system with advanced analytics, content management, and progress tracking.',
      technologies: ['Angular', 'Django', 'MongoDB'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              {index % 2 === 0 ? (
                <>
                  <div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-xl shadow-lg object-cover h-80"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 transition-colors">
                      Learn More
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 transition-colors">
                      Learn More
                      <ArrowRight size={18} />
                    </button>
                  </div>
                  <div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-xl shadow-lg object-cover h-80"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
