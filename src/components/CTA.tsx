import { motion } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer,
  buttonPulse,
} from '../hooks/useAnimations';

export const CTA = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold text-[#333333] mb-4"
          variants={fadeInUp}
        >
          Ready to Start Your Next Project?
        </motion.h2>
        <motion.p
          className="text-[#9CA3AF] text-lg mb-8"
          variants={fadeInUp}
        >
          Let's transform your business challenges into scalable, high-impact software solutions.
        </motion.p>
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
