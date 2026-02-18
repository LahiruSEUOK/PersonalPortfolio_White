import { Briefcase, BarChart3, Zap, Code } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Project Management',
      description: 'Leading complex software projects from concept to delivery using Agile, Scrum, and hybrid methodologies.',
    },
    {
      icon: BarChart3,
      title: 'Business Analysis',
      description: 'Strategic insights and data-driven recommendations to optimize your business operations.',
    },
    {
      icon: Zap,
      title: 'Solution Design',
      description: 'Custom solutions tailored to your unique business needs and technical requirements.',
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Scalable and maintainable software solutions built with modern technologies.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What I Do
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive services to accelerate your business growth and digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <Icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
