import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const FRAME_COUNT = 48;

const framePaths = Array.from({ length: FRAME_COUNT }, (_, i) => {
  const num = String(i + 1).padStart(4, '0');
  const time = (i / 6).toFixed(2);
  return `/images/hero%20section/frame_${num}_${time}s.webp`;
});

const titles = [
  'Python Developer',
  'Django Expert',
  'React Native Builder',
  'Full-Stack Engineer',
];

export default function Hero() {
  const containerRef = useRef(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollYProgress = useMotionValue(0);

  // Preload all frames
  useEffect(() => {
    framePaths.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Manual scroll progress — works in all browsers regardless of overflow CSS
  useEffect(() => {
    const updateProgress = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / totalScrollable));
      scrollYProgress.set(p);
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, [scrollYProgress]);

  // Frame index driven by scroll progress
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(latest * (FRAME_COUNT - 1))));
      setFrameIndex(idx);
    });
  }, [scrollYProgress]);

  // Typewriter effect
  useEffect(() => {
    const fullText = titles[currentTitle];
    let timeout;
    if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    } else {
      timeout = setTimeout(
        () =>
          setDisplayText(
            isDeleting
              ? fullText.substring(0, displayText.length - 1)
              : fullText.substring(0, displayText.length + 1)
          ),
        isDeleting ? 38 : 75
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle]);

  // ── Phase 1: scroll-driven intro text ──────────────────────────────────────
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.07, 0.50, 0.64], [0, 1, 1, 0]);
  const badgeY      = useTransform(scrollYProgress, [0, 0.07], [20, 0]);

  const nameOpacity = useTransform(scrollYProgress, [0.05, 0.14, 0.56, 0.70], [0, 1, 1, 0]);
  const nameY       = useTransform(scrollYProgress, [0.05, 0.14], [32, 0]);

  const typewriterOpacity = useTransform(scrollYProgress, [0.13, 0.22, 0.52, 0.65], [0, 1, 1, 0]);

  const bioOpacity = useTransform(scrollYProgress, [0.21, 0.31, 0.48, 0.61], [0, 1, 1, 0]);
  const bioY       = useTransform(scrollYProgress, [0.21, 0.31], [18, 0]);

  const ctaOpacity = useTransform(scrollYProgress, [0.28, 0.37, 0.45, 0.58], [0, 1, 1, 0]);
  const ctaY       = useTransform(scrollYProgress, [0.28, 0.37], [18, 0]);

  // ── Phase 2: end cinematic reveal ──────────────────────────────────────────
  const imageScale  = useTransform(scrollYProgress, [0.70, 1.0], [1, 2.3]);
  const overlayEnd  = useTransform(scrollYProgress, [0.66, 0.88], [0, 0.97]); // near-black

  const endOpacity  = useTransform(scrollYProgress, [0.83, 0.92, 0.97, 1.0], [0, 1, 1, 0.9]);
  const endScale    = useTransform(scrollYProgress, [0.83, 0.94], [0.88, 1]);
  const endLineW    = useTransform(scrollYProgress, [0.87, 0.97], ['0%', '100%']);

  // ── Scroll hint ─────────────────────────────────────────────────────────────
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.04, 0.13], [1, 1, 0]);

  return (
    <section className="hero-scroll-container" id="hero" ref={containerRef}>
      <div className="hero-sticky">

        {/* ── Animated frame ── */}
        <motion.img
          src={framePaths[frameIndex]}
          alt=""
          className="hero-frame-image"
          style={{ scale: imageScale }}
        />

        {/* ── Base vignette overlay ── */}
        <div className="hero-overlay" />

        {/* ── End darkening overlay (approaches pure black) ── */}
        <motion.div className="hero-overlay-end" style={{ opacity: overlayEnd }} />

        {/* ══════════════════════════════════════════════════
            PHASE 1 — Scroll-driven intro text
        ══════════════════════════════════════════════════ */}
        <div className="hero-text-container">

          {/* Available badge */}
          <motion.div
            className="hero-badge"
            style={{ opacity: badgeOpacity, y: badgeY }}
          >
            <span className="hero-badge-dot" />
            <span>Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="hero-name"
            style={{ opacity: nameOpacity, y: nameY }}
          >
            I'm Mohammad
            <br />
            <span className="hero-name-accent">Thanzeel N</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div className="hero-typewriter" style={{ opacity: typewriterOpacity }}>
            <span className="typewriter-prefix">// </span>
            <span className="typewriter-text">{displayText}</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            className="hero-bio"
            style={{ opacity: bioOpacity, y: bioY }}
          >
            CS Graduate 2025 — Building real-time apps, mobile platforms &amp;
            scalable backends with Django &amp; React Native.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="hero-cta-row"
            style={{ opacity: ctaOpacity, y: ctaY }}
          >
            <a href="#projects" className="hero-btn-primary">
              View Projects
              <span className="hero-btn-arrow">→</span>
            </a>
            <a href="#contact" className="hero-btn-ghost">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════
            PHASE 2 — Cinematic dark-to-name reveal
        ══════════════════════════════════════════════════ */}
        <motion.div
          className="hero-end-reveal"
          style={{ opacity: endOpacity, scale: endScale }}
        >
          {/* Ambient glow halo behind the name */}
          <div className="hero-end-halo" />

          {/* The name — gold shimmer sweep */}
          <h2 className="hero-end-name">Mohammad Thanzeel N</h2>

          {/* Decorative expanding lines + diamond */}
          <div className="hero-end-divider">
            <motion.span className="hero-divider-line" style={{ width: endLineW }} />
            <span className="hero-divider-gem">◆</span>
            <motion.span className="hero-divider-line" style={{ width: endLineW }} />
          </div>

          {/* Role */}
          <p className="hero-end-role">Full-Stack Developer</p>
        </motion.div>

        {/* ── Scroll hint (mouse icon) ── */}
        <motion.div className="hero-scroll-hint" style={{ opacity: scrollHintOpacity }}>
          <div className="scroll-mouse">
            <motion.div
              className="scroll-mouse-ball"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <span>Scroll to explore</span>
        </motion.div>

      </div>
    </section>
  );
}
