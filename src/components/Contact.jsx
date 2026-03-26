import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const contactItems = [
  {
    icon: '✉️',
    label: 'thanzeelmtn@gmail.com',
    href: 'mailto:thanzeelmtn@gmail.com',
  },
  {
    icon: '📱',
    label: '+91 7907287451',
    href: 'tel:+917907287451',
  },
  {
    icon: '🔗',
    label: 'linkedin.com/in/thanzeel-n-bb5875289',
    href: 'https://linkedin.com/in/thanzeel-n-bb5875289',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="section" id="contact" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-line" />
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's build something amazing together</p>
      </motion.div>

      <div className="contact-wrapper">
        <motion.div
          className="contact-card"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p className="contact-tagline" variants={itemVariants}>
            ✨ Open to freelance &amp; full-time opportunities
          </motion.p>

          <div className="contact-items">
            {contactItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="contact-icon">{item.icon}</span>
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
