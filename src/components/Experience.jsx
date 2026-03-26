import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    title: 'Freelance Full-Stack Developer',
    company: 'Ameen Project',
    date: 'Feb 2026 – Mar 2026',
  },
  {
    title: 'Freelance Mobile Developer',
    company: 'Endur_Track Project',
    date: 'Jan 2026 – Feb 2026',
  },
  {
    title: 'Python Full Stack Training',
    company: 'One Team Solutions, Calicut',
    date: 'May 2025 – Nov 2025',
  },
  {
    title: 'Full Stack Intern',
    company: 'Grapesgenix Technical Solutions, Thrissur',
    date: 'Oct 2024 – Jan 2025',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" id="experience" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-line" />
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
      </motion.div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{
              opacity: 0,
              x: i % 2 === 0 ? -60 : 60,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-company">{exp.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
