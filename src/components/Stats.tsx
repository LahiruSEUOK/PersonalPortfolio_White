import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../hooks/useAnimations";

export const Stats = () => {
  const stats = [
    { value: '7+', label: 'Years Experience' },
    { value: '15+', label: 'Tema Members Managed' },
    { value: '20+', label: 'Clients Served' },
    { value: '100%', label: 'Client Retention' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="text-center" variants={fadeInUp}>
              <div className="text-3xl sm:text-4xl font-semibold text-[#000000] mb-2">
                {stat.value}
              </div>
              <p className="text-[#1D1D1F] text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
