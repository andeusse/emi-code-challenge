import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataById } from '../../utils/dataBase';
import TaskForm from '../../components/TaskForm/TaskForm';
import './style.css';

type Props = {};

const EditTask = (props: Props) => {
  const { id } = useParams();
  const [task, setTask] = useState(getDataById(id));

  return (
    <div className="main-container">
      <h1 className="main-title">Edit Task</h1>
      <TaskForm id={id ? id : ''} task={task} setTask={setTask}></TaskForm>
    </div>
  );
};

export default EditTask;
