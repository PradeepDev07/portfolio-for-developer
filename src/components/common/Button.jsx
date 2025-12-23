import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'primary', ...props }) => {
  const baseStyles = "rounded-xl py-2.5 px-4 text-sm font-medium transition duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white/10 text-white hover:bg-white/20",
    secondary: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-white/20 text-white hover:bg-white/5"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
