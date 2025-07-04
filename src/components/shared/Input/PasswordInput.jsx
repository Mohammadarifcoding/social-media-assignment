import React, { useState } from 'react';
import Input from './Input';

const PasswordInput = ({ name = '', placeholder = '', ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Input
      {...props}
      placeholder={placeholder}
      type={showPassword ? 'text' : 'password'}
      name={name}
    >
      <button
        onClick={() => setShowPassword(!showPassword)}
        type="button"
        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
      >
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </Input>
  );
};

export default PasswordInput;
