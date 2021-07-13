import React from 'react';

export function Button({ handleClick, children, className }) {
  return (
    <button
      onClick={handleClick}
      className={`py-1.5 px-3 ring-1 rounded-2xl ${className}`}
    >
      {children}
    </button>
  );
}
