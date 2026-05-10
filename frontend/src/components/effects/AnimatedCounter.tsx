import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2200,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setCount(target);
      return;
    }
    let frame = 0;
    const totalFrames = 55;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(
        decimals > 0
          ? parseFloat((target * eased).toFixed(decimals))
          : Math.round(target * eased)
      );
      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      }
    }, duration / totalFrames);
    return () => clearInterval(timer);
  }, [isInView, target, decimals, duration]);

  const display =
    decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString();
  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
