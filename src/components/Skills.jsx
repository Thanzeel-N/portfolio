import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Python', 'Django', 'Django REST Framework', 'Django Channels', 'WebSockets'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React', 'React Native', 'TypeScript', 'NativeWind', 'HTML', 'CSS'],
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Git', 'Expo', 'EAS', 'VS Code'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section className="section" id="skills" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-line" variants={categoryVariants} />
        <motion.h2 className="section-title" variants={categoryVariants}>
          Tech Stack
        </motion.h2>
        <motion.p className="section-subtitle" variants={categoryVariants}>
          Technologies I work with daily
        </motion.p>

        <div className="skills-container">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={categoryVariants}
            >
              <div className="skill-category-title">
                <span className="icon">{category.icon}</span>
                {category.title}
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    custom={i}
                    variants={tagVariants}
                    whileHover={{
                      scale: 1.08,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
