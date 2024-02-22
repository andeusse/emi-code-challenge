import React from 'react';
import { states } from '../../../types/tasks';
import './style.css';

type Props = {
  text: string;
  type: states;
};

const Bagde = (props: Props) => {
  const { text, type } = props;
  return <span className={`badge ${type}`}>{type.toString() + text}</span>;
};

export default Bagde;
