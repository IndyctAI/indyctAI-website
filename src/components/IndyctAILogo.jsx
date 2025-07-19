import React from 'react';

const IndyctAILogo = ({ className = "h-8 w-auto" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 120 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      
      {/* Letter I with neural network elements */}
      <g>
        <rect x="10" y="15" width="8" height="30" fill="url(#logoGradient)" rx="2"/>
        
        {/* Neural network nodes on I */}
        <circle cx="14" cy="20" r="3" fill="#06B6D4" opacity="0.8"/>
        <circle cx="14" cy="30" r="2" fill="#3B82F6" opacity="0.6"/>
        <circle cx="14" cy="40" r="3" fill="#06B6D4" opacity="0.8"/>
        
        {/* Connection lines */}
        <line x1="14" y1="23" x2="14" y2="28" stroke="#06B6D4" strokeWidth="1" opacity="0.6"/>
        <line x1="14" y1="32" x2="14" y2="37" stroke="#06B6D4" strokeWidth="1" opacity="0.6"/>
      </g>
      
      {/* Letter A with tech elements */}
      <g>
        <path 
          d="M35 45 L45 15 L55 15 L65 45 L60 45 L58 38 L42 38 L40 45 Z M44 32 L56 32 L50 20 Z" 
          fill="url(#logoGradient)"
        />
        
        {/* Neural network nodes on A */}
        <circle cx="42" cy="35" r="2" fill="#06B6D4" opacity="0.8"/>
        <circle cx="50" cy="25" r="2.5" fill="#3B82F6" opacity="0.9"/>
        <circle cx="58" cy="35" r="2" fill="#06B6D4" opacity="0.8"/>
        
        {/* Connection lines */}
        <line x1="44" y1="35" x2="48" y2="27" stroke="#06B6D4" strokeWidth="1" opacity="0.6"/>
        <line x1="52" y1="27" x2="56" y2="35" stroke="#06B6D4" strokeWidth="1" opacity="0.6"/>
        <line x1="42" y1="35" x2="58" y2="35" stroke="#3B82F6" strokeWidth="1" opacity="0.4"/>
      </g>
      
      {/* Additional tech elements */}
      <g opacity="0.3">
        <circle cx="25" cy="25" r="1" fill="#06B6D4"/>
        <circle cx="75" cy="35" r="1" fill="#3B82F6"/>
        <line x1="18" y1="25" x2="24" y2="25" stroke="#06B6D4" strokeWidth="0.5"/>
        <line x1="66" y1="35" x2="74" y2="35" stroke="#3B82F6" strokeWidth="0.5"/>
      </g>
    </svg>
  );
};

export default IndyctAILogo;

