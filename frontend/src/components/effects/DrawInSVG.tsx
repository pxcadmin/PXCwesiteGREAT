import { CSSProperties } from "react";

interface DrawInSVGProps {
  d: string;
  stroke?: string;
  strokeWidth?: number;
  length?: number;
  width?: number;
  height?: number;
  viewBox?: string;
  className?: string;
  style?: CSSProperties;
  fill?: string;
}

export function DrawInSVG({
  d,
  stroke = "#47d8ff",
  strokeWidth = 2,
  length = 1200,
  width = 600,
  height = 200,
  viewBox,
  className,
  style,
  fill = "none",
}: DrawInSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox ?? `0 0 ${width} ${height}`}
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path
        d={d}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pxc-draw-in"
        style={{ ["--pxc-draw-len" as string]: length } as CSSProperties}
      />
    </svg>
  );
}
