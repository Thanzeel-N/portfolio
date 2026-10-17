import { useEffect, useState } from 'react';
import { motion as Motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 500, damping: 34, mass: 0.45 });
  const smoothY = useSpring(cursorY, { stiffness: 500, damping: 34, mass: 0.45 });
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (event) => {
      cursorX.set(event.clientX - 8);
      cursorY.set(event.clientY - 8);
      setVisible(true);
      setInteractive(Boolean(event.target.closest('a, button, [data-cursor]')));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    document.documentElement.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, [cursorX, cursorY]);

  return (
    <Motion.div
      className={`custom-cursor ${interactive ? 'is-interactive' : ''} ${visible ? 'is-visible' : ''}`}
      style={{ x: smoothX, y: smoothY }}
      animate={{ scale: pressed ? 0.72 : 1 }}
      transition={{ duration: 0.14 }}
      aria-hidden="true"
    >
      <span />
    </Motion.div>
  );
}
