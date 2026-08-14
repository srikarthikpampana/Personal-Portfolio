import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { PointerEvent, ReactNode } from "react";

export function TiltCard({
  children,
  className,
  maxTilt = 8,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springConfig = { damping: 20, stiffness: 220, mass: 0.6 };
  const springX = useSpring(px, springConfig);
  const springY = useSpring(py, springConfig);

  const rotateX = useTransform(springY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [0, 1], [-maxTilt, maxTilt]);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handlePointerLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      className="h-full"
      style={{ perspective: 800 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className={className}>
        {children}
      </motion.div>
    </motion.div>
  );
}
