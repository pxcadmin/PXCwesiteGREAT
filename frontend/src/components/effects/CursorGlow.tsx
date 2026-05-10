import { ReactNode, useRef } from "react";

interface CursorGlowProps {
  children: ReactNode;
  className?: string;
}

export function CursorGlow({ children, className }: CursorGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`pxc-cursor-glow ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
