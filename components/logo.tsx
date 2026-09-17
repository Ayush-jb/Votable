/**
 * Ashoka Chakra-inspired geometric logo for Votable.
 * Uses the sage green color as primary.
 */
export function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Votable logo"
    >
      {/* Outer circle */}
      <circle cx="16" cy="16" r="15" stroke="#8B9A6E" strokeWidth="1.5" fill="none" />
      {/* Inner geometric pattern - Ashoka Chakra inspired spokes */}
      <circle cx="16" cy="16" r="11" stroke="#8B9A6E" strokeWidth="0.75" fill="none" />
      {/* Simplified spokes */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = (16 + 6 * Math.cos(rad)).toFixed(4);
        const y1 = (16 + 6 * Math.sin(rad)).toFixed(4);
        const x2 = (16 + 11 * Math.cos(rad)).toFixed(4);
        const y2 = (16 + 11 * Math.sin(rad)).toFixed(4);
        return (
          <line
            key={angle}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#8B9A6E"
            strokeWidth="0.75"
          />
        );
      })}
      {/* Center dot */}
      <circle cx="16" cy="16" r="3" fill="#8B9A6E" opacity="0.2" />
      <circle cx="16" cy="16" r="1.5" fill="#8B9A6E" />
    </svg>
  );
}
