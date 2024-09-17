import React from 'react';

const Input = ({
  type,
  className,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <>
      <input
        type={type}
        className={className}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export default Input;
