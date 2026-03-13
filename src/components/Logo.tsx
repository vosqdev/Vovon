export const Logo = ({ className = "", variant = "light" }: { className?: string, variant?: 'light' | 'dark' }) => {
  const imgSrc = variant === 'dark' 
    ? "https://image2url.com/r2/default/images/1773421788209-50b1f125-1292-4c2a-9751-f63b3d357d58.png"
    : "https://image2url.com/r2/default/images/1773421654866-3632d637-ba69-4ef0-bea2-a6cd7b2917e6.png";

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={imgSrc} 
        alt="VOVON Logo" 
        className="h-full w-auto object-contain"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
        if (fallback) fallback.style.display = 'block';
      }}
    />
    <svg 
      viewBox="0 0 400 100" 
      className="h-full w-auto" 
      style={{ display: 'none' }}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6b21a8" /> {/* Purple */}
          <stop offset="50%" stopColor="#db2777" /> {/* Pink */}
          <stop offset="100%" stopColor="#ea580c" /> {/* Orange */}
        </linearGradient>
        <linearGradient id="gradRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" /> {/* Light Blue */}
          <stop offset="100%" stopColor="#4f46e5" /> {/* Indigo */}
        </linearGradient>
        <linearGradient id="gradBottom" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#eab308" /> {/* Yellow */}
        </linearGradient>
      </defs>
      
      {/* Infinity Symbol approximation */}
      <g transform="translate(10, 15) scale(0.7)">
        {/* Left loop */}
        <path 
          d="M 50 50 C 20 20, 20 80, 50 80 C 70 80, 80 60, 100 50 C 80 40, 70 20, 50 20 Z" 
          fill="url(#gradLeft)" 
        />
        {/* Right loop */}
        <path 
          d="M 100 50 C 120 40, 130 20, 150 20 C 180 20, 180 80, 150 80 C 130 80, 120 60, 100 50 Z" 
          fill="url(#gradRight)" 
        />
        {/* Connecting/overlapping parts */}
        <path 
          d="M 50 80 C 70 80, 80 60, 100 50 C 120 60, 130 80, 150 80 C 120 80, 80 80, 50 80 Z" 
          fill="url(#gradBottom)" 
        />
      </g>
      
      {/* VOVON text */}
      <text 
        x="130" 
        y="72" 
        fontFamily="Montserrat, system-ui, sans-serif" 
        fontWeight="900" 
        fontSize="68" 
        fill="currentColor" 
        letterSpacing="-1"
      >
        VOVON
      </text>
    </svg>
  </div>
  );
};
