import React from 'react';

const Button = ({ type, className = '', children, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
