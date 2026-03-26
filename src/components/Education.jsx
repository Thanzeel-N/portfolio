import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" id="education" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-line" />
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic foundation</p>
      </motion.div>

      <motion.div
        className="education-card"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        animate={inView ? {
          y: [0, -8, 0],
        } : {}}
        whileHover={{
          scale: 1.02,
        }}
      >
        <motion.div
          className="education-icon"
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        >
          🎓
        </motion.div>
        <h3 className="education-degree">
          Bachelor of Science in Computer Science
        </h3>
        <p className="education-college">
          KR's Sree Narayana College
        </p>
        <p className="education-year">
          University of Calicut | 2025
        </p>
      </motion.div>
    </section>
  );
}
