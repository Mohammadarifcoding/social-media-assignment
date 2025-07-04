import React from 'react';

const Input = React.forwardRef(({ type = "text", placeholder = "", name, error, children, ...props }, ref) => {
  return (
    <div className="mb-2">
      <div className="relative">
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          aria-label={placeholder}
          className={`form-input ${error ? 'border-red-500' : ''}`}
          {...props}
        />
        {children}
      </div>
      {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
    </div>
  );
});

export default Input;
