import React from 'react';

export default function Badge({
  children,
  variant = 'neutral',
  dot = false,
  className = '',
}) {
  const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full';
  
  const variants = {
    neutral: 'bg-surface-container-high text-on-surface',
    primary: 'bg-primary-container/20 text-primary border border-primary-container/30',
    success: 'bg-[#0039b4]/10 text-[#b7c4ff] border border-[#0039b4]/20',
    error: 'bg-error-container text-error border border-error/20',
    warning: 'bg-secondary-container text-secondary-fixed-dim border border-outline/20',
    glass: 'bg-[#1F1F1F] border border-outline-variant/30 text-on-surface',
  };

  const dotColors = {
    neutral: 'bg-on-surface',
    primary: 'bg-primary-container',
    success: 'bg-tertiary',
    error: 'bg-error',
    warning: 'bg-secondary',
    glass: 'bg-primary-container',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {dot && <span className={`w-2 h-2 rounded-full ${dotColors[variant] || 'bg-primary-container'}`} />}
      {children}
    </span>
  );
}
