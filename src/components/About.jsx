import { motion as Motion } from 'framer-motion';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <Motion.div className="about-panel" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <p className="eyebrow">01 / About me</p>
        <div className="about-layout">
          <h2>Code with clarity.<br /><em>Design with intent.</em></h2>
          <div className="about-copy">
            <p>I am Mohammad Thanzeel N, a full-stack developer at Metamorph. I turn product ideas into reliable digital experiences — from the component systems people see to the APIs and data flows working behind them.</p>
            <p>My foundation in Python and Django gives me strong backend instincts, while Next.js, React and Flutter let me deliver polished products across web and mobile.</p>
          </div>
        </div>
        <div className="about-facts">
          <div><strong>06</strong><span>Featured live products</span></div>
          <div><strong>Web + Mobile</strong><span>Product range</span></div>
          <div><strong>Malappuram, IN</strong><span>Based in Kerala</span></div>
        </div>
      </Motion.div>
    </section>
  );
}
