import { motion as Motion } from 'framer-motion';

const projects = [
  { name: 'PharmBuds', type: 'Staff operations app', stack: 'Flutter', url: 'https://pharmbuds.tech', domain: 'pharmbuds.tech', description: 'A pharmaceutical team operations app that helps managers track staff work routines and keep day-to-day activity visible.', accent: '#6fffc1', code: 'PB', featured: true },
  { name: 'VueSpace', type: 'Web product', stack: 'Next.js', url: 'https://vuespace.metamorph.live', domain: 'vuespace.metamorph.live', description: 'A production web experience built at Metamorph with a focus on responsive interfaces, clear structure and polished interaction.', accent: '#b8ff35', code: 'VS' },
  { name: 'Manus', type: 'Web product', stack: 'Next.js', url: 'https://manus.metamorph.live', domain: 'manus.metamorph.live', description: 'A modern Next.js product experience delivered as part of my work at Metamorph, from interface implementation to deployment.', accent: '#ff6b4a', code: 'MA' },
  { name: 'Tied Moments', type: 'Web product', stack: 'Next.js', url: 'https://tiedmoments.metamorph.live', domain: 'tiedmoments.metamorph.live', description: 'A refined, responsive web experience engineered in Next.js with careful attention to layout, usability and visual detail.', accent: '#f4bdff', code: 'TM' },
  { name: 'Acoust', type: 'Web platform', stack: 'Next.js', url: 'https://acoust.onrender.com', domain: 'acoust.onrender.com', description: 'A deployed Next.js platform shaped around a fast, accessible and consistent experience across screen sizes.', accent: '#78c7ff', code: 'AC' },
  { name: 'Archiform', type: 'Web platform', stack: 'Next.js', url: 'https://archiform.onrender.com', domain: 'archiform.onrender.com', description: 'A production-facing web platform built with reusable components and a maintainable, performance-minded frontend.', accent: '#ffd660', code: 'AR' },
  { name: 'Universal Sanitary', type: 'Commerce website', stack: 'Next.js', url: 'https://universalsanitary.in', domain: 'universalsanitary.in', description: 'A premium digital storefront for Universal Sanitary House, presenting its sanitaryware collections, Kerala-wide service and six-decade legacy.', accent: '#d8e1d8', code: 'US' },
];

function ProductVisual({ project }) {
  return <div className="product-visual" style={{ '--project-accent': project.accent }}>
    <div className="browser-bar"><span /><span /><span /><small>{project.domain}</small></div>
    <div className="product-canvas"><span className="product-code">{project.code}</span><div className="product-lines"><span /><span /><span /></div><div className="product-orbit" /></div>
  </div>;
}

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading"><p className="eyebrow">02 / Selected work</p><h2>Products in the wild.</h2><p className="section-intro">A selection of live web and mobile products I have helped bring from idea to production.</p></div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Motion.article className={`project-row ${project.featured ? 'project-featured' : ''}`} key={project.name} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}>
            <ProductVisual project={project} />
            <div className="project-copy"><div className="project-meta"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.type}</span></div><h3>{project.name}</h3><p>{project.description}</p>
                <div className="project-footer"><span className="pill">{project.stack}</span><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>Visit live project <span aria-hidden="true">&#8599;</span></a></div>
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
}
