import { useMemo } from "react";

/** Falling coins & currency symbols — animated money background */
export function MoneyRain({ count = 24 }: { count?: number }) {
  const items = useMemo(() => {
    const symbols = ["$", "€", "£", "¥", "₹", "$", "€"];
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 10,
      size: 14 + Math.random() * 22,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      opacity: 0.15 + Math.random() * 0.35,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((it) => (
        <span
          key={it.id}
          className="absolute font-bold animate-fall"
          style={{
            left: `${it.left}%`,
            top: 0,
            fontSize: `${it.size}px`,
            animationDelay: `${it.delay}s`,
            animationDuration: `${it.duration}s`,
            color: "#d4af37",
            opacity: it.opacity,
            textShadow: "0 0 12px rgba(212, 175, 55, 0.6)",
          }}
        >
          {it.symbol}
        </span>
      ))}
    </div>
  );
}
