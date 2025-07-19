import React from 'react';

const IndyctAILogo = ({ className = "h-8 w-auto" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 80 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      
      {/* Letter I - more compact and elegant */}
      <g>
        <rect x="8" y="8" width="6" height="24" fill="url(#logoGradient)" rx="3"/>
        
        {/* Subtle tech elements on I */}
        <circle cx="11" cy="12" r="1.5" fill="#06B6D4" opacity="0.7"/>
        <circle cx="11" cy="20" r="1" fill="#3B82F6" opacity="0.5"/>
        <circle cx="11" cy="28" r="1.5" fill="#06B6D4" opacity="0.7"/>
        
        {/* Minimal connection lines */}
        <line x1="11" y1="14" x2="11" y2="19" stroke="#06B6D4" strokeWidth="0.5" opacity="0.4"/>
        <line x1="11" y1="21" x2="11" y2="26" stroke="#06B6D4" strokeWidth="0.5" opacity="0.4"/>
      </g>
      
      {/* Letter A - closer to I and more refined */}
      <g>
        <path 
          d="M22 32 L28 8 L34 8 L40 32 L37 32 L36 27 L26 27 L25 32 Z M27.5 22 L34.5 22 L31 12 Z" 
          fill="url(#logoGradient)"
        />
        
        {/* Refined tech elements on A */}
        <circle cx="28" cy="24" r="1" fill="#06B6D4" opacity="0.6"/>
        <circle cx="31" cy="16" r="1.2" fill="#3B82F6" opacity="0.8"/>
        <circle cx="34" cy="24" r="1" fill="#06B6D4" opacity="0.6"/>
        
        {/* Elegant connection lines */}
        <line x1="29" y1="24" x2="30" y2="17" stroke="#06B6D4" strokeWidth="0.5" opacity="0.3"/>
        <line x1="32" y1="17" x2="33" y2="24" stroke="#06B6D4" strokeWidth="0.5" opacity="0.3"/>
      </g>
      
      {/* Minimal additional tech accent */}
      <g opacity="0.2">
        <circle cx="18" cy="20" r="0.5" fill="#06B6D4"/>
        <line x1="15" y1="20" x2="17" y2="20" stroke="#06B6D4" strokeWidth="0.3"/>
      </g>
    </svg>
  );
};

export default IndyctAILogo;

