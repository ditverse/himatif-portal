import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconRight,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-container text-white hover:bg-inverse-primary shadow-[0_4px_12px_rgba(204,0,0,0.15)] hover:shadow-[0_8px_20px_rgba(204,0,0,0.3)]',
    secondary: 'bg-transparent border border-outline/30 text-on-surface hover:border-primary-container hover:text-white',
    ghost: 'bg-transparent text-secondary hover:text-on-surface hover:bg-surface-container-low',
    danger: 'bg-error-container text-error hover:bg-error hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs rounded',
    md: 'px-6 py-2.5 text-sm rounded-md',
    lg: 'px-8 py-4 text-base rounded-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="material-symbols-outlined mr-2 text-[1.25em]">{icon}</span>}
      {children}
      {iconRight && <span className="material-symbols-outlined ml-2 text-[1.25em]">{iconRight}</span>}
    </button>
  );
}
