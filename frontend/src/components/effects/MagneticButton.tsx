import { ReactNode, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface MagneticButtonProps {
  children: ReactNode;

  strength?: number;
  className?: string;
}

export function MagneticButton({
  children,
  strength = 6,
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const tx = Math.max(-1, Math.min(1, dx)) * strength;
    const ty = Math.max(-1, Math.min(1, dy)) * strength;
    ref.current.style.transform = `translate(${tx}px, ${ty}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block transition-transform duration-200 ease-out ${className ?? ""}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
