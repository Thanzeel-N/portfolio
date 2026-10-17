import { motion as Motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Hero() {
  return (
    <section className="minimal-hero" id="top">
      <div className="minimal-hero-inner">
        <Motion.p className="minimal-kicker" variants={reveal} initial="hidden" animate="show" custom={0.04}>
          Developer at Metamorph
        </Motion.p>

        <div className="minimal-hero-body">
          <Motion.h1 variants={reveal} initial="hidden" animate="show" custom={0.1}>
            I build useful<br />digital products.
          </Motion.h1>

          <Motion.figure
            className="minimal-avatar"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/images/avatar-3d-v2.webp"
              alt="3D portrait of Mohammed Thanzeel N"
              width="900"
              height="1350"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </Motion.figure>

          <Motion.div className="minimal-intro" variants={reveal} initial="hidden" animate="show" custom={0.18}>
            <p>
              Full-stack developer working across web and mobile with Next.js,
              Flutter, Python and Django.
            </p>
            <div className="minimal-links">
              <a href="#projects">Selected work <span aria-hidden="true">&#8600;</span></a>
              <a href="mailto:thanzeelmtn@gmail.com">Email me <span aria-hidden="true">&#8599;</span></a>
            </div>
          </Motion.div>
        </div>

        <Motion.div className="minimal-meta" variants={reveal} initial="hidden" animate="show" custom={0.26}>
          <span>Mohammed Thanzeel N</span>
          <span>Malappuram, India</span>
          <span>Scroll to explore &#8595;</span>
        </Motion.div>
      </div>
    </section>
  );
}
