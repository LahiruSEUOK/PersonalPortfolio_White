import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import flowSuite from '../assets/flowSuite.svg';
import SaaSPayroll from '../assets/SaaSPayroll.svg';
import cenziosLMS from '../assets/cenziosLMS.svg';
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
  staggerContainer,
} from '../hooks/useAnimations';

export const Projects = () => {
  const projects = [
    {
      id: 'Project 01',
      title: 'FlowSuite',
      description: 'Manufacturing workflow management platform reducing production cycle time by 75%.',
      role: 'Project Manager & Solution Designer',
      duration: '6 Months',
      team: '8 Members',
      image: flowSuite,
    },
    {
      id: 'Project 02',
      title: 'SaaS Payroll',
      description: 'Cloud-based payroll solution for SMEs with centralized employee management.',
      role: 'PM, BA & Solution Designer',
      duration: '2 Months',
      team: '5 Members',
      image: SaaSPayroll,
    },
    {
      id: 'Project 03',
      title: 'Cenzios LMS',
      description: 'Comprehensive LMS platform reducing administrative overhead by 80%.',
      role: 'Project Manager & Solution Designer',
      duration: '8 Months',
      team: '10 Members',
      image: cenziosLMS,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={scaleIn}
        >
          <h2 className="text-4xl font-semibold text-[#333333]">
            Featured Projects
          </h2>
        </motion.div>

        {/* Project Rows */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                {/* Image */}
                <motion.div
                  className={`bg-gray-100 rounded-[32px] p-6 lg:p-12 aspect-[4/3] flex items-center justify-center shadow-sm border border-gray-100 ${
                    !isEven ? 'md:order-2' : ''
                  }`}
                  variants={isEven ? fadeInLeft : fadeInRight}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto drop-shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  />
                </motion.div>

                {/* Text */}
                <motion.div
                  className={`space-y-6 ${!isEven ? 'md:order-1' : ''}`}
                  variants={isEven ? fadeInRight : fadeInLeft}
                >
                  <motion.span
                    className="text-sm font-medium text-[#9CA3AF] uppercase tracking-widest inline-block"
                    variants={fadeInUp}
                  >
                    {project.id}
                  </motion.span>
                  <motion.h3
                    className="text-4xl lg:text-4xl font-semibold text-[#333333] tracking-tight"
                    variants={fadeInUp}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-lg text-[#9CA3AF] leading-relaxed max-w-lg"
                    variants={fadeInUp}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#9CA3AF] font-medium"
                    variants={fadeInUp}
                  >
                    <span>{project.role}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>{project.duration}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>{project.team}</span>
                  </motion.div>

                  <motion.div className="pt-4" variants={fadeInUp}>
                    <motion.a
                      href="/projects"
                      className="text-[#007AFF] hover:text-blue-700 font-semibold inline-flex items-center gap-2 group transition-colors"
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      Learn More
                      <motion.span
                        className="inline-flex"
                        whileHover={{ x: 6 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <ArrowRight size={20} className="transition-transform" />
                      </motion.span>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
