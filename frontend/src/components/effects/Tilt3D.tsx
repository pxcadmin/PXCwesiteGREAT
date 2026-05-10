import { ReactNode, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface Tilt3DProps {
  children: ReactNode;
  maxTilt?: number;
  className?: string;
}

export function Tilt3D({
  children,
  maxTilt = 6,
  className,
}: Tilt3DProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const cap = Math.min(maxTilt, 6);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !targetRef.current) return;
    const rect = targetRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * 2 * cap;
    const ry = (px - 0.5) * 2 * cap;
    targetRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const handleLeave = () => {
    if (!targetRef.current) return;
    targetRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      className={`pxc-tilt-wrapper ${className ?? ""}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div ref={targetRef} className="pxc-tilt-target">
        {children}
      </div>
    </div>
  );
}
