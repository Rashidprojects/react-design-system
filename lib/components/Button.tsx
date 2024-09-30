import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="my-custom-button" // Add a class name if you want to style further
    >
      {label}
    </button>
  );
};

export default Button;
