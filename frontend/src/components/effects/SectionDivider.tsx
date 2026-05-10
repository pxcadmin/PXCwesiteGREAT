interface SectionDividerProps {

  color?: string;
  className?: string;
}

export function SectionDivider({
  color = "#47d8ff",
  className,
}: SectionDividerProps) {
  return (
    <div
      className={`relative w-full h-8 overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0,16 Q150,4 300,16 T600,16 T900,16 T1200,16"
          stroke={color}
          strokeWidth="1.5"
          strokeOpacity="0.55"
          className="pxc-divider-path"
        />
        <path
          d="M0,18 Q200,28 400,18 T800,18 T1200,18"
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.25"
          className="pxc-divider-path"
          style={{ animationDelay: "1.2s" }}
        />
      </svg>
    </div>
  );
}
