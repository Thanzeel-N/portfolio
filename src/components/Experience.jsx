import { motion as Motion } from 'framer-motion';

const history = [
  { period: '2026 - Present', role: 'Developer', company: 'Metamorph', detail: 'Building and shipping responsive Next.js products while contributing across interface development, product polish and production delivery.', current: true },
  { period: '2026', role: 'Freelance Full-Stack & Mobile Developer', company: 'Independent', detail: 'Delivered operational web and mobile systems including logistics, inventory, offline workflows and automated reporting.' },
  { period: '2025', role: 'Python Full-Stack Trainee', company: 'One Team Solutions, Calicut', detail: 'Developed practical full-stack skills across Python, Django, databases and modern frontend development.' },
  { period: '2024 - 2025', role: 'Full-Stack Intern', company: 'Grapesgenix Technical Solutions', detail: 'Contributed to end-to-end application development and strengthened production-focused engineering fundamentals.' },
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-heading split-heading"><div><p className="eyebrow">03 / Experience</p><h2>Building, learning,<br />shipping.</h2></div><p className="section-intro">My journey from computer science graduate to a product developer working across web and mobile.</p></div>
      <div className="experience-list">
        {history.map((item, index) => <Motion.article className="experience-item" key={`${item.company}-${item.period}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}>
          <p className="experience-period">{item.period}</p><div><h3>{item.role} {item.current && <span className="current-label">Current</span>}</h3><p className="experience-company">{item.company}</p></div><p className="experience-detail">{item.detail}</p>
        </Motion.article>)}
      </div>
    </section>
  );
}
