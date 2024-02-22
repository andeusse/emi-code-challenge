import { CiCircleCheck } from 'react-icons/ci';
import { CiCircleInfo } from 'react-icons/ci';
import { CiWarning } from 'react-icons/ci';
import { RxCrossCircled } from 'react-icons/rx';

import { alert } from '../../../types/alert';
import './style.css';

type Props = {
  text: string;
  type: alert;
};

type icons = {
  success: JSX.Element;
  information: JSX.Element;
  warning: JSX.Element;
  error: JSX.Element;
};

const iconArray: icons = {
  success: <CiCircleCheck />,
  information: <CiCircleInfo />,
  warning: <CiWarning />,
  error: <RxCrossCircled />,
};

const Alert = (props: Props) => {
  const { text, type } = props;

  const icon = iconArray[type];

  return (
    <div className={`alert ${type}`}>
      <span className="alert-icon">{icon}</span>
      <p className="alert-text">{text}</p>
    </div>
  );
};

export default Alert;
