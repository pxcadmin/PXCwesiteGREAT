import { ReactNode } from "react";

interface MarqueeStripProps {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
}

export function MarqueeStrip({
  items,
  className,
  itemClassName,
}: MarqueeStripProps) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`overflow-hidden ${className ?? ""}`}
      data-testid="marquee-strip"
    >
      <div className="pxc-marquee-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            className={`flex-shrink-0 px-6 ${itemClassName ?? ""}`}
            aria-hidden={i >= items.length}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
