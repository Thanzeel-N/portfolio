import { motion as Motion } from 'framer-motion';

const groups = [
  { title: 'Frontend', skills: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { title: 'Mobile', skills: ['Flutter', 'React Native', 'Expo', 'Offline-first apps'] },
  { title: 'Backend', skills: ['Python', 'Django', 'REST APIs', 'WebSockets', 'PostgreSQL', 'MySQL'] },
  { title: 'Workflow', skills: ['Git', 'Responsive UI', 'Deployment', 'Product thinking'] },
];

const section = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const reveal = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const row = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const tags = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
};

const tag = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <Motion.section
      className="section skills-section"
      id="skills"
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
    >
      <div className="skills-heading">
        <Motion.p className="eyebrow" variants={reveal}>04 / Toolkit</Motion.p>
        <Motion.h2
          variants={{
            hidden: { opacity: 0, y: 56, clipPath: 'inset(0 0 100% 0)' },
            show: { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          Technologies I use to turn a blank screen into a working product.
        </Motion.h2>
      </div>

      <Motion.div className="skill-groups" variants={section}>
        <Motion.span
          className="skills-rule"
          aria-hidden="true"
          variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
        />
        {groups.map((group, index) => (
          <Motion.div className="skill-group" key={group.title} variants={row}>
            <span className="skill-number">0{index + 1}</span>
            <h3>{group.title}</h3>
            <Motion.div className="skill-tags" variants={tags}>
              {group.skills.map((skill) => (
                <Motion.span
                  key={skill}
                  variants={tag}
                  whileHover={{ y: -3, backgroundColor: '#161713', color: '#f2f0e9' }}
                  transition={{ duration: 0.18 }}
                >
                  {skill}
                </Motion.span>
              ))}
            </Motion.div>
          </Motion.div>
        ))}
      </Motion.div>
    </Motion.section>
  );
}
