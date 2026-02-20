import { BarChart, BarChart3, Layers, Code2 } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: BarChart,
      title: "Project Management",
      description:
        "Leading complex software projects from concept to delivery using Agile, Scrum, and hybrid methodologies.",
    },
    {
      icon: BarChart3,
      title: "Business Analysis",
      description:
        "Strategic insights and data-driven recommendations to optimize your business operations.",
    },
    {
      icon: Layers,
      title: "Solution Design",
      description:
        "Custom solutions tailored to your unique business needs and technical requirements.",
    },
    {
      icon: Code2,
      title: "Custom Software",
      description:
        "Scalable and maintainable software solutions built with modern technologies.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#333333] mb-4">
            What I Do
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive services to accelerate your business growth and
            digital transformation
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
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#333333]" />
                </div>
                <h3 className="text-[24px] font-semibold text-[#333333] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#9CA3AF] text-[14px] leading-relaxed">
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
