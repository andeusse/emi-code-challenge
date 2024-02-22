import { MdAddCircle } from 'react-icons/md';
import TaskList from '../../components/TaskList/TaskList';
import './style.css';
import IconButton from '../../components/UI/IconButton/IconButton';
import { iconButton } from '../../types/iconButton';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Tasks = (props: Props) => {
  const navigate = useNavigate();

  const handleAddTask = () => {
    navigate('/tasks/new');
  };

  return (
    <div className="main-container">
      <div className="main-title-container">
        <h1 className="main-title">Tasks</h1>
        <IconButton
          icon={<MdAddCircle></MdAddCircle>}
          type={iconButton.round}
          action={() => {
            handleAddTask();
          }}
        ></IconButton>
      </div>
      <TaskList></TaskList>
    </div>
  );
};

export default Tasks;
