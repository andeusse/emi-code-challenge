import LinkButton from '../../components/UI/LinkButton/LinkButton';
import { FaHome } from 'react-icons/fa';
import { FaTasks } from 'react-icons/fa';

import './style.css';

type Props = {};

const Error = (props: Props) => {
  return (
    <>
      <div className="error-img">
        <img
          src="https://64.media.tumblr.com/tumblr_lz2ufhclZj1r4mh0bo1_r1_400.gifv"
          alt="Not Found"
        ></img>
      </div>
      <LinkButton to={`/`} icon={<FaHome></FaHome>}>
        Home
      </LinkButton>
      <LinkButton to={`/tasks`} icon={<FaTasks></FaTasks>}>
        Tasks
      </LinkButton>
    </>
  );
};

export default Error;
