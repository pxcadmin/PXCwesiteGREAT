interface AuroraBackdropProps {

  colors?: [string, string, string];

  opacity?: number;
  className?: string;
}

export function AuroraBackdrop({
  colors = ["#FB0000", "#47d8ff", "#AEA1EA"],
  opacity = 0.18,
  className,
}: AuroraBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`}
    >
      <div
        className="pxc-aurora-orb-1 absolute top-[-20%] left-[-10%] w-[55%] h-[55%] rounded-full blur-3xl"
        style={{ background: colors[0], opacity }}
      />
      <div
        className="pxc-aurora-orb-2 absolute top-[30%] right-[-15%] w-[50%] h-[50%] rounded-full blur-3xl"
        style={{ background: colors[1], opacity }}
      />
      <div
        className="pxc-aurora-orb-3 absolute bottom-[-20%] left-[20%] w-[45%] h-[45%] rounded-full blur-3xl"
        style={{ background: colors[2], opacity: opacity * 0.8 }}
      />
    </div>
  );
}
