import { CSSProperties, ReactNode } from "react";

interface BeamCardProps {
  children: ReactNode;
  cyan?: boolean;
  accent?: string;
  className?: string;
  style?: CSSProperties;
}

export function BeamCard({ children, cyan, accent, className, style }: BeamCardProps) {
  const mergedStyle = accent
    ? { ...(style ?? {}), ["--beam-accent" as any]: accent }
    : style;
  return (
    <div
      className={`pxc-beam-card ${cyan && !accent ? "pxc-beam-cyan" : ""} ${className ?? ""}`}
      style={mergedStyle}
    >
      {children}
    </div>
  );
}
