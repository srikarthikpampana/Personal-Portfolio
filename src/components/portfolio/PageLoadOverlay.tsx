import { AnimatePresence, motion } from "motion/react";
import { Shield } from "lucide-react";
import { useEffect, useState } from "react";

const MIN_VISIBLE_MS = 550;
const MAX_VISIBLE_MS = 2200;

export function PageLoadOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    let settled = false;

    const finish = () => {
      if (settled) return;
      settled = true;
      const elapsed = performance.now() - start;
      const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0);
      window.setTimeout(() => setVisible(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    const fallback = window.setTimeout(finish, MAX_VISIBLE_MS);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-background"
          aria-hidden
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
          >
            <Shield className="h-5 w-5 text-primary" />
            SKP
            <span className="font-mono text-xs font-normal text-muted-foreground">/ devsecops</span>
          </motion.div>

          <div className="h-0.5 w-40 overflow-hidden rounded-full bg-secondary/60">
            <motion.div
              className="h-full w-1/3 rounded-full bg-primary"
              animate={{ x: ["-100%", "220%"] }}
              transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
