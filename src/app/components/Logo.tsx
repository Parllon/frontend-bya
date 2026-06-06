export function Logo({ size = "default", light = false }: { size?: "small" | "default" | "large", light?: boolean }) {
  const sizes = {
    small: { container: "w-10 h-10", text: "text-xl", subtext: "text-[0.4rem]" },
    default: { container: "w-16 h-16", text: "text-3xl", subtext: "text-[0.5rem]" },
    large: { container: "w-32 h-32", text: "text-6xl", subtext: "text-[0.65rem]" }
  };

  const currentSize = sizes[size];
  const textColor = light ? "var(--background)" : "var(--foreground)";

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className={currentSize.container} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="58" stroke="var(--primary)" strokeWidth="0.5" fill="none" />
        <path id="circlePath1" d="M 20,60 A 40,40 0 0,1 100,60" fill="none" />
        <text style={{ fontSize: '7px', letterSpacing: '3px', fontWeight: 400, fill: textColor }}>
          <textPath href="#circlePath1" startOffset="50%" textAnchor="middle">BYA MARCONDES</textPath>
        </text>
        <path id="circlePath2" d="M 100,60 A 40,40 0 0,1 20,60" fill="none" />
        <text style={{ fontSize: '6px', letterSpacing: '2.5px', fontWeight: 300, fill: 'var(--primary)' }}>
          <textPath href="#circlePath2" startOffset="50%" textAnchor="middle">NAIL DESIGNER</textPath>
        </text>
        <g transform="translate(60, 60)">
          <text x="-12" y="8" style={{ fontSize: '32px', fontWeight: 300, fill: textColor, fontFamily: 'serif' }}>B</text>
          <text x="2" y="8" style={{ fontSize: '36px', fontWeight: 400, fill: 'var(--primary)', fontFamily: 'serif' }}>M</text>
        </g>
        <path d="M 15,60 l 2,-2 l 2,2 l -2,3 z" fill="var(--primary)" opacity="0.6" />
        <path d="M 103,60 l 2,-2 l 2,2 l -2,3 z" fill="var(--primary)" opacity="0.6" />
      </svg>
    </div>
  );
}