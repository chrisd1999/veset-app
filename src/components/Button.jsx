import React from 'react';

const Button = React.memo(function Button({ handleClick, children, className }) {
  return (
    <button
      onClick={handleClick}
      className={`py-1.5 px-3 ring-1 rounded-2xl ${className}`}
    >
      {children}
    </button>
  );
});

export { Button };
