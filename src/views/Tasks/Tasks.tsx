import { MdAddCircle } from 'react-icons/md';
import TaskList from '../../components/TaskList/TaskList';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import './style.css';

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
        <Button
          text="Add Task"
          startIcon={<MdAddCircle></MdAddCircle>}
          className="form-action-button"
          action={() => {
            handleAddTask();
          }}
        ></Button>
      </div>
      <TaskList></TaskList>
    </div>
  );
};

export default Tasks;
