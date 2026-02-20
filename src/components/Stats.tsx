import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeInUp, staggerContainer } from "../hooks/useAnimations";

const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(count, target, {
            duration: 2,
            ease: [0.25, 0.46, 0.45, 0.94],
          });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, target]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = `${v}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

export const Stats = () => {
  const stats = [
    { value: 7, suffix: '+', label: 'Years Experience' },
    { value: 15, suffix: '+', label: 'Team Members Managed' },
    { value: 20, suffix: '+', label: 'Clients Served' },
    { value: 100, suffix: '%', label: 'Client Retention' },
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
            <motion.div
              key={index}
              className="text-center cursor-default"
              variants={fadeInUp}
              whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 300 } }}
            >
              <div className="text-3xl sm:text-4xl font-semibold text-[#000000] mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
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
