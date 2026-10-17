import { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';

const links = [['Work', '#projects'], ['Experience', '#experience'], ['About', '#about'], ['Contact', '#contact']];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <Motion.a
        className="brand"
        href="#top"
        aria-label="Mohammad Thanzeel, home"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover="hover"
      >
        <Motion.span
          className="brand-mark"
          variants={{ hover: { rotate: 8, scale: 1.08, borderRadius: '30%', transition: { type: 'spring', stiffness: 380, damping: 18 } } }}
        >
          <span className="brand-initials" aria-hidden="true">MTN</span>
        </Motion.span>
        <span className="brand-copy">Mohammad<br />Thanzeel</span>
      </Motion.a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"><span /><span /></button>
      <nav className={open ? 'nav-open' : ''} aria-label="Primary navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="mailto:thanzeelmtn@gmail.com">Let's talk <span aria-hidden="true">&#8599;</span></a>
      </nav>
    </header>
  );
}
