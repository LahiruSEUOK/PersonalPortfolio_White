import { Zap, CheckCircle, MessageSquare } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Strategic Thinking",
      description:
        "Data-driven approach to problem-solving and opportunity identification.",
    },
    {
      icon: CheckCircle,
      title: "Proven Delivery",
      description:
        "Consistent track record of on-time and on-budget project delivery.",
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description:
        "Transparent and collaborative approach to stakeholder management.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#333333] mb-4">
            Why Work With Me
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="max-w-sm w-full text-left"
              >
                <Icon className="w-9 h-9 text-[#2B7BE9] mb-4" />

                <h3 className="text-xl font-semibold text-[#333333] mb-3">
                  {benefit.title}
                </h3>

                <p className="text-[#9CA3AF] leading-relaxed">
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
