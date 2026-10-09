'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'white' | 'outline-white' | 'outline-dark' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  showDefaultArrow?: boolean;
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  showDefaultArrow = true,
  href,
  className = '',
  onClick,
  disabled,
  type = 'button',
  ...rest
}) => {
  const variantClassMap: Record<string, string> = {
    primary: 'btn-style-primary',
    accent: 'btn-style-accent',
    white: 'btn-style-white',
    'outline-white': 'btn-style-outline-white',
    'outline-dark': 'btn-style-outline-dark',
    dark: 'btn-style-dark',
    ghost: 'text-[#18191c] hover:bg-slate-100 font-semibold',
  };

  const sizeClassMap = {
    sm: 'text-[13px] px-5 py-2.5 rounded-[4px]',
    md: 'text-[15px] px-8 py-3.5 rounded-[4px]',
    lg: 'text-[16px] px-10 py-4 rounded-[4px]',
  };

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      <span>{children}</span>
      {icon ? (
        <span className="btn-arrow-icon shrink-0">{icon}</span>
      ) : showDefaultArrow ? (
        <ArrowUpRight className="btn-arrow-icon w-4 h-4 shrink-0 transition-transform duration-300" />
      ) : null}
    </span>
  );

  const combinedClass = `theme-btn font-['Lexend'] ${variantClassMap[variant] || 'btn-style-primary'} ${sizeClassMap[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      {...(rest as any)}
    >
      {content}
    </button>
  );
};
