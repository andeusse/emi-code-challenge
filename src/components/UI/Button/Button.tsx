import React from 'react';
import './style.css';

type Props = {
  text: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  action?: () => void;
  className?: string;
};

const Button = (props: Props) => {
  const { startIcon, endIcon, text, action, className } = props;
  return (
    <button className={`button-container ${className}`} onClick={action}>
      <span className="button-icon button-start-icon">{startIcon}</span>
      <span className="button-icon-text">{text}</span>
      <span className="button-icon button-end-icon">{endIcon}</span>
    </button>
  );
};

export default Button;
