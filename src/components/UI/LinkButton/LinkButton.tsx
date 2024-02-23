import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

type Props = {
  to: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const LinkButton = (props: Props) => {
  const { to, icon, children } = props;
  return (
    <button className="button">
      <Link to={to}>
        <span className="button-icon">{icon} </span>
        {children}
      </Link>
    </button>
  );
};

export default LinkButton;
