import React, { useState } from 'react';
import type { FC, MouseEventHandler } from 'react';

interface ButtonProps {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'light' | 'dark' | 'lightweight';
}

const Button: FC<ButtonProps> = ({
  text = '',
  onClick,
  className = '',
  type = 'button',
  variant = 'light',
}) => {
  const [hover, setHover] = useState(false);

  const baseStyle: React.CSSProperties = {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 150ms ease, opacity 150ms ease',
    boxSizing: 'border-box',
  };

  const variantStyle: React.CSSProperties =
    variant === 'light'
      ? {
          backgroundColor: hover ? '#ffffff' : 'transparent',
          color: hover ? '#000000' : '#ffffff',
          border: '1px solid #ffffff',
          transform: hover ? 'scale(1.02)' : 'none',
        }
      : variant === 'dark'
      ? {
          backgroundColor: '#645340',
          color: '#FAE7CF',
          border: 'none',
          opacity: hover ? 0.85 : 1,
          transform: hover ? 'scale(1.02)' : 'none',
        }
      : {
          backgroundColor: '#FAE7CF',
          color: '#864E35',
          border: 'none',
          opacity: hover ? 0.85 : 1,
          transform: hover ? 'scale(1.02)' : 'none',
        };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...baseStyle, ...variantStyle }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </button>
  );
};

export default Button;
