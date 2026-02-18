import { Lightbulb, CheckCircle, MessageSquare } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      icon: Lightbulb,
      title: 'Strategic Thinking',
      description: 'Data-driven approach to problem-solving and opportunity identification.',
    },
    {
      icon: CheckCircle,
      title: 'Proven Delivery',
      description: 'Consistent track record of on-time and on-budget project delivery.',
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'Transparent and collaborative approach to stakeholder management.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Why Work With Me
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
