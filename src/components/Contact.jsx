import { motion as Motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <Motion.div className="contact-inner" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="eyebrow">05 / Contact</p>
        <h2>Have a product in mind?<br /><em>Let's build it right.</em></h2>
        <a className="contact-email" href="mailto:thanzeelmtn@gmail.com">thanzeelmtn@gmail.com <span>↗</span></a>
        <div className="contact-links">
          <a href="tel:+917907287451">+91 79072 87451</a>
          <a href="https://linkedin.com/in/thanzeel-n-bb5875289" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </Motion.div>
    </section>
  );
}
