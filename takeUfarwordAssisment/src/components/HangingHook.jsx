import '../index.css';

export default function HangingHook() {
  return (
    <div className="relative h-20 md:h-24 flex items-start justify-center pointer-events-none">
      
      {/* Hook SVG */}
      <svg
        className="hook-swing"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        {/* Hook circle */}
        <circle cx="30" cy="15" r="3" fill="#999" stroke="#666" strokeWidth="1" />

        {/* Hook curves */}
        <path
          d="M 30 18 Q 22 20 20 28 Q 19 32 22 35"
          stroke="#999"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 30 18 Q 38 20 40 28 Q 41 32 38 35"
          stroke="#999"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Spiral binding */}
        <g strokeWidth="1.5" stroke="#AAA" fill="none">
          {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((x) => (
            <circle key={x} cx={x + 5} cy="42" r="2" fill="#BBB" />
          ))}
        </g>

        {/* Gradient */}
        <defs>
          <linearGradient id="hookGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#D0D0D0', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#999999', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#707070', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Light strip effect */}
      <div className="absolute top-10 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30 blur-sm"></div>
    </div>
  )
}