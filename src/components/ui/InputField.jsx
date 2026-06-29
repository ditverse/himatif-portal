import React from 'react';

export default function InputField({
  label,
  icon,
  className = '',
  id,
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="text-label-sm font-bold text-on-surface uppercase tracking-wider">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
            {icon}
          </span>
        )}
        <input
          id={id}
          className={`w-full bg-surface-container-low border border-outline-variant/30 rounded-lg text-on-background placeholder:text-secondary/60 focus:outline-none focus:border-primary-container transition-colors py-3 ${
            icon ? 'pl-10 pr-4' : 'px-4'
          }`}
          {...props}
        />
      </div>
    </div>
  );
}
