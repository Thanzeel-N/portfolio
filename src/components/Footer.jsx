import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="footer-text">
        Designed &amp; Built by <span>Mohammad Thanzeel N</span>
      </p>
      <div className="footer-links">
        <a
          href="mailto:thanzeelmtn@gmail.com"
          className="footer-link"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/thanzeel-n-bb5875289"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn
        </a>
        <a
          href="tel:+917907287451"
          className="footer-link"
        >
          Phone
        </a>
      </div>
    </motion.footer>
  );
}
