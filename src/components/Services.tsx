import { BarChart, BarChart3, Layers, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
  cardHover,
  iconBounce,
} from "../hooks/useAnimations";

export const Services = () => {
  const services = [
    {
      icon: BarChart,
      title: "Project Management",
      description:
        "Leading complex projects from concept to delivery using Agile, and hybrid methodologies.",
    },
    {
      icon: BarChart3,
      title: <> Business <br /> Analysis </>,
      description:
        "Strategic insights and data-driven recommendations to optimize your business operations.",
    },
    {
      icon: Layers,
      title: <>Solution <br /> Design</>,
      description:
        "Custom solutions tailored to your unique business needs and technical requirements.",
    },
    {
      icon: Code2,
      title: <> Custom <br /> Software</>,
      description:
        "Scalable and maintainable software solutions built with modern technologies.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold text-[#333333] mb-4"
            variants={fadeInDown}
          >
            What I Do
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Comprehensive services to accelerate your business growth and
            digital transformation
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md cursor-default"
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4"
                  variants={iconBounce}
                >
                  <Icon className="w-7 h-7 text-[#333333]" />
                </motion.div>
                <motion.div
                  variants={cardHover}
                  className="rounded-lg"
                  style={{ padding: 0 }}
                >
                  <h3 className="text-[24px] font-semibold text-[#333333] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-[14px] leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
