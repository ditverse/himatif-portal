import React from 'react';

export default function TextArea({
  label,
  className = '',
  id,
  rows = 4,
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="text-label-sm font-bold text-on-surface uppercase tracking-wider">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg text-on-background placeholder:text-secondary/60 focus:outline-none focus:border-primary-container transition-colors px-4 py-3"
        {...props}
      />
    </div>
  );
}
