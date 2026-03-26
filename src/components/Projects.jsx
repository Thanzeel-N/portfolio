import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    name: 'Ameen',
    subtitle: 'Delivery & Distribution Management System',
    role: 'Freelance Full-Stack',
    date: 'Feb 2026 – Mar 2026',
    description:
      'Comprehensive delivery and distribution management system for streamlined logistics operations — enabling vehicle load tracking, staff deliveries, shop inventory, and payment reconciliation with real-time updates.',
    stack: ['Django', 'DRF', 'React Native', 'TypeScript', 'PostgreSQL', 'WebSockets', 'ReportLab'],
    highlights: [
      'JWT-based role authentication (Owner/Staff)',
      'Real-time sync via Django Channels & WebSockets',
      'Automated PDF reports for deliveries & balance statements',
      'Warehouse (Godown) inventory dashboard',
      '17+ database migrations with complex relations',
    ],
  },
  {
    name: 'Endur_Track',
    subtitle: 'Construction Site Tracking App',
    role: 'Freelance Mobile Dev',
    date: 'Jan 2026 – Feb 2026',
    description:
      'Operational tracking and measurement tool for construction and site visits with offline-first architecture and automated reporting.',
    stack: ['Expo', 'React Native', 'AsyncStorage', 'React Native Reanimated'],
    highlights: [
      'Offline-first with background synchronization',
      '60 FPS UI with React Native Reanimated',
      'Auto PDF generation via expo-print',
      'Real-time site measurement and tracking',
    ],
  },
  {
    name: 'DoerHub',
    subtitle: 'Real-Time Service Marketplace',
    role: 'Full-Stack Developer',
    date: 'Academic Project',
    description:
      'Full-stack app connecting service providers with customers using live GPS matching, real-time chat, and instant notifications.',
    stack: ['Django', 'React', 'WebSockets', 'MySQL', 'REST API'],
    highlights: [
      'GPS-based provider matching with Haversine distance',
      'Real-time chat with auto-reconnecting WebSocket',
      'Live provider tracking and notifications',
      'Comprehensive service booking flow',
    ],
  },
  {
    name: 'Waste Management System',
    subtitle: 'Admin Dashboard & Tracking',
    role: 'Intern Developer',
    date: 'Academic Project',
    description:
      'Django-based system to track and optimize waste collection with admin panel, automated reports, and data visualization.',
    stack: ['Django', 'MySQL', 'REST APIs'],
    highlights: [
      'Role-based authentication system',
      'Admin dashboard with analytics',
      'Data visualization and reporting',
      'Optimized collection route management',
    ],
  },
];

function ProjectCard({ project, index }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="project-card-inner">
        <div className="project-header">
          <div>
            <h3 className="project-name">{project.name}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '2px' }}>
              {project.date}
            </p>
          </div>
          <span className="project-role">{project.role}</span>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-tech-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <ul className="project-highlights">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" id="projects" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-line" />
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Real-world solutions I've built</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
