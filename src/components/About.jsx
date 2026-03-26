import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { number: 4, suffix: '+', label: 'Projects Delivered' },
  { number: 2, suffix: '', label: 'Freelance Clients' },
  { number: 1, suffix: '', label: 'Internship' },
  { number: 2025, suffix: '', label: 'Graduate' },
];

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = target > 100 ? 2000 : 1500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="section" id="about" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-line" variants={itemVariants} />
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          Turning ideas into scalable digital solutions
        </motion.p>

        <div className="about-grid">
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I'm a passionate{' '}
              <span className="about-highlight">
                Python &amp; Django Full-Stack Developer
              </span>{' '}
              with a deep love for building real-time systems and scalable
              architectures. From crafting robust REST APIs to shipping
              cross-platform mobile apps with React Native, I thrive at the
              intersection of clean code and impactful user experiences.
            </p>
            <p>
              My approach combines technical depth with an eye for design — I
              believe great software should not only work flawlessly but also
              feel intuitive and delightful. Whether it's WebSocket-powered
              live tracking, offline-first mobile apps, or automated PDF
              reporting, I bring ideas to life with precision and creativity.
            </p>
            <p>
              Currently open to{' '}
              <span className="about-highlight">
                freelance and full-time opportunities
              </span>{' '}
              where I can contribute to building products that make a real impact.
            </p>
          </motion.div>

          <motion.div
            className="stats-grid"
            variants={containerVariants}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="stat-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <AnimatedCounter
                  target={stat.number}
                  suffix={stat.suffix}
                  inView={inView}
                />
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
