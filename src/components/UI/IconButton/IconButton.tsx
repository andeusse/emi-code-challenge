import React from 'react';
import './style.css';
import { iconButton } from '../../../types/iconButton';

type Props = {
  icon: React.ReactNode;
  type: iconButton;
  action?: () => void;
  className?: string;
  formAction?: string;
};

const IconButton = (props: Props) => {
  const { icon, type, action, className, formAction } = props;
  return (
    <button
      className={`button-icon-container ${type} ${className}`}
      onClick={action}
      formAction={formAction}
    >
      <span className="button-icon">{icon}</span>
    </button>
  );
};

export default IconButton;
