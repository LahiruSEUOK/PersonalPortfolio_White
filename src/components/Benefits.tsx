import { Zap, CheckCircle, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
  scaleInBounce,
} from "../hooks/useAnimations";

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
            Why Work With Me
          </motion.h2>
        </motion.div>

        {/* Benefit Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="max-w-sm w-full text-left cursor-default"
                variants={fadeInUp}
                whileHover={{
                  y: -6,
                  transition: { type: 'spring', stiffness: 300, damping: 15 },
                }}
              >
                {/* Icon with bounce-in */}
                <motion.div
                  variants={scaleInBounce}
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                >
                  <Icon className="w-9 h-9 text-[#2B7BE9] mb-4" />
                </motion.div>

                <h3 className="text-xl font-semibold text-[#333333] mb-3">
                  {benefit.title}
                </h3>

                <p className="text-[#9CA3AF] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
