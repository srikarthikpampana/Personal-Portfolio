import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.5 });
  const glowY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.5 });
  const ringX = useSpring(x, { damping: 28, stiffness: 320, mass: 0.4 });
  const ringY = useSpring(y, { damping: 28, stiffness: 320, mass: 0.4 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(canHover);
    if (!canHover) return;

    document.documentElement.classList.add("custom-cursor");

    const updateTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    updateTheme();
    const themeObserver = new MutationObserver(updateTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.classList.remove("custom-cursor");
      themeObserver.disconnect();
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[60] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full ${
          isDark ? "mix-blend-screen" : "mix-blend-multiply"
        }`}
        style={{
          x: glowX,
          y: glowY,
          background: `radial-gradient(circle, color-mix(in oklab, var(--primary) ${
            isDark ? 10 : 16
          }%, transparent) 0%, transparent 70%)`,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[61] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60"
        style={{ x: ringX, y: ringY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[61] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        style={{ x, y }}
      />
    </>
  );
}
