import React from 'react';

interface GradientIconProps {
  icon:
    | 'menu'
    | 'x'
    | 'arrow-up-right'
    | 'check'
    | 'plus'
    | 'minus'
    | 'search'
    | 'arrow-right'
    | 'arrow-left'
    | 'external-link'
    | 'globe'
    | 'bar-chart';
  size?: number;
  className?: string;
  glow?: boolean;
}

const GradientIcon: React.FC<GradientIconProps> = ({
  icon,
  size = 24,
  className = '',
  glow = true,
}) => {
  const sharedProps = {
    width: size,
    height: size,
    fill: 'url(#gradientFill)',
    stroke: 'none',
    className: `${glow ? 'drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]' : ''} ${className}`,
  };

  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...sharedProps}>
      <defs>
        <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>

      {/* ICON PATHS (SOLID STYLE) */}
      {icon === 'menu' && (
        <>
          <rect x="3" y="5" width="18" height="2" rx="1" />
          <rect x="3" y="11" width="18" height="2" rx="1" />
          <rect x="3" y="17" width="18" height="2" rx="1" />
        </>
      )}

      {icon === 'x' && <path d="M6 6L18 18M6 18L18 6" strokeWidth="2.5" />}

      {icon === 'arrow-up-right' && <path d="M7 17L17 7V17H7Z" />}

      {icon === 'check' && <path d="M20 6L9 17L4 12Z" />}

      {icon === 'plus' && <path d="M11 5H13V11H19V13H13V19H11V13H5V11H11V5Z" />}

      {icon === 'minus' && <rect x="5" y="11" width="14" height="2" rx="1" />}

      {icon === 'search' && (
        <path d="M10 2A8 8 0 1 1 2 10A8 8 0 0 1 10 2M14.828 14.828L20 20" strokeWidth="2" />
      )}

      {icon === 'arrow-right' && <path d="M10 5L17 12L10 19Z" />}

      {icon === 'arrow-left' && <path d="M14 5L7 12L14 19Z" />}

      {icon === 'external-link' && (
        <path d="M14 3H21V10H19V6.41L10.41 15L9 13.59L17.59 5H14V3Z" />
      )}

      {icon === 'globe' && (
        <path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C10.673 4 9.402 4.263 8.232 4.744C8.803 6.041 9.52 7.147 10.292 8.123C11.06 9.093 12 10.029 13.067 10.95C13.977 11.737 14.931 12.5 15.911 13.241C15.464 14.267 14.905 15.23 14.25 16.103C13.606 16.963 12.782 17.713 11.803 18.323C11.873 17.566 12 16.806 12 16C12 14.537 11.736 13.111 11.242 11.776C10.754 10.465 10.058 9.282 9.236 8.246C9.896 7.566 10.544 6.851 11.115 6.135C11.69 5.413 12.161 4.695 12 4Z" />
      )}

      {icon === 'bar-chart' && (
        <>
          <rect x="4" y="14" width="4" height="6" rx="1" />
          <rect x="10" y="10" width="4" height="10" rx="1" />
          <rect x="16" y="6" width="4" height="14" rx="1" />
        </>
      )}
    </svg>
  );
};

export default GradientIcon;