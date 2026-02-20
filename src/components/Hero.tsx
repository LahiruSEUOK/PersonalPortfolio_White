import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import profile from "../assets/profile.svg";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "../hooks/useAnimations";

export const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="mb-8" variants={scaleIn}>
          <img
            src={profile}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg border-4 "
          />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#333333] mb-4"
          variants={fadeInUp}
        >
          Lahiru Sandeepa
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl font-normal text-gray-700 mb-2"
          variants={fadeInUp}
        >
          Project Manager | Business Analyst | Solution Designer
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-gray-500 font-light mb-8 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          I transform ideas into strategic, results-driven solutions by
          combining business insight, technical expertise, and structured
          project delivery to create measurable impact.
        </motion.p>

        <motion.button
          className="bg-[#0073EC] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Schedule a Call
          <ArrowRight size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
};
