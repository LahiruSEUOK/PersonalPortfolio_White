import { motion } from "framer-motion";
import profile from "../assets/profile.svg";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  floatingAnimation,
  buttonPulse,
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
        {/* Profile image with scale-in + floating */}
        <motion.div className="mb-8" variants={scaleIn}>
          <motion.img
            src={profile}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg border-4"
            animate={floatingAnimation}
          />
        </motion.div>

        {/* Title with fade-in-up */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#333333] mb-4"
          variants={fadeInUp}
        >
          Lahiru Sandeepa
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl font-normal text-gray-700 mb-2"
          variants={fadeInUp}
        >
          Project Manager | Business Analyst | Solution Designer
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg text-gray-500 font-light mb-8 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          <br />
          Struggling with technical challenges?
          <br />
          I help you solve them with clear strategy, smart engineering, and reliable delivery.
        </motion.p>

        {/* CTA Button with hover/tap + subtle pulse */}
        <motion.div variants={fadeInUp}>
          <motion.a
            href="tel:+94711186028"
            className="bg-[#2B7BE9] hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-full inline-flex items-center gap-2 transition-colors shadow-lg"
            animate={buttonPulse}
            whileHover={{ scale: 1.08, boxShadow: '0 10px 30px rgba(43, 123, 233, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Call
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
