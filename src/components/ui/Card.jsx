import React from 'react';

export default function Card({
  children,
  variant = 'glass',
  hoverEffect = true,
  className = '',
  ...props
}) {
  const baseStyles = 'rounded-xl border transition-all duration-300';
  
  const variants = {
    glass: 'glass-panel p-6 border-outline-variant/30',
    flat: 'bg-surface-container-lowest p-6 border-surface-container-high shadow-[0_4px_12px_rgba(17,24,39,0.05)]',
    outlined: 'bg-transparent p-6 border-outline-variant',
  };

  const hoverStyles = hoverEffect 
    ? 'hover:border-primary-container hover:shadow-[0_8px_24px_rgba(204,0,0,0.1)]' 
    : '';

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
