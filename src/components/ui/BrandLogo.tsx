import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked';
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
  theme = 'light',
}) => {
  const emblemSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-[15px] font-extrabold tracking-tight',
    md: 'text-[18px] font-black tracking-tight',
    lg: 'text-[22px] font-black tracking-tight',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.18em] font-bold',
    md: 'text-[10px] tracking-[0.2em] font-bold',
    lg: 'text-[11px] tracking-[0.22em] font-bold',
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`inline-flex items-center select-none group transition-transform ${
        variant === 'stacked' ? 'flex-col text-center' : 'flex-row'
      } ${className}`}
    >
      <img src="/assets/logo-horizontal.png" width="220px" height="" alt="" />
    </div>
  );
};
