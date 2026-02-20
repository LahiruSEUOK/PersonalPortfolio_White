import about from '../assets/BridgingStrategy.svg';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '../hooks/useAnimations';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-semibold text-[#333333] mb-6"
              variants={fadeInLeft}
            >
              Bridging Strategy and Execution
            </motion.h2>
            <motion.p
              className="text-[#9CA3AF] text-base sm:text-lg mb-4"
              variants={fadeInLeft}
            >
              With over 7 years of professional experience, including 3+ years
              dedicated to project management, and a B.Sc. in Software
              Engineering combined with an MBA in Project Management, I
              bridge the gap between business vision and technical execution.
            </motion.p>
            <motion.p
              className="text-[#9CA3AF] text-base sm:text-lg mb-6"
              variants={fadeInLeft}
            >
              I specialize in leading enterprise software initiatives, architecting
              scalable systems, and guiding cross-functional teams to deliver
              structured, measurable results.
            </motion.p>
            <motion.ul className="space-y-3 text-gray-600" variants={staggerContainer}>
              {[
                'Strategic planning and execution',
                'Cross-functional team leadership',
                'Process optimization and automation',
              ].map((item, i) => (
                <motion.li key={i} className="flex items-start gap-3" variants={fadeInUp}>
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <motion.img
              src={about}
              alt="Team collaboration"
              className="w-full rounded-2xl shadow-2xl object-cover h-96"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
