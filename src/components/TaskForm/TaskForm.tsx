import React from 'react';
import { FaSave } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';

import { task } from '../../types/tasks';
import Bagde from '../UI/Badge/Bagde';
import IconButton from '../UI/IconButton/IconButton';
import { iconButton } from '../../types/iconButton';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { addData, setData } from '../../utils/dataBase';

type Props = {
  id: string;
  task: task;
  setTask: React.Dispatch<React.SetStateAction<task>>;
};

const TaskForm = (props: Props) => {
  const { id, task, setTask } = props;

  const navigate = useNavigate();

  const handleChange = (e: any, index?: number) => {
    if (task) {
      if (e.target.type === 'checkbox') {
        setTask({ ...task, [e.target.name]: e.target.checked });
      } else if (e.target.name === 'note') {
        if (index !== undefined && task.notes !== undefined) {
          let notes = [...task.notes];
          notes[index] = e.target.value;
          setTask({ ...task, notes: notes });
        }
      } else {
        setTask({ ...task, [e.target.name]: e.target.value });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(id, task);

    if (task && id) {
      if (id === 'new') {
        addData(task);
      } else {
        setData(id, task);
      }
    }
    navigate('/tasks');
  };

  const handleBack = () => {
    navigate('/tasks');
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-item">
          <label className="form-label">Title:</label>
          <input
            className="form-input"
            type="text"
            name="title"
            placeholder="Enter a title"
            value={task?.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label className="form-label">Description:</label>
          <textarea
            className="form-input text-area"
            name="description"
            placeholder="Enter a description"
            value={task?.description}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label className="form-label">Due Date:</label>
          <input
            className="form-input"
            type="date"
            name="dueDate"
            value={task?.dueDate}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-item checkbox">
          <label className="form-label">Completed:</label>
          <input
            className="form-input checkbox"
            type="checkbox"
            name="completed"
            checked={task?.completed}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label className="form-label">State History:</label>
          {task?.stateHistory &&
            task?.stateHistory.map((sh, index) => {
              return (
                <div key={`${index} ${sh.state}`} className="form-badge">
                  <Bagde text={` on ${sh.date}`} type={sh.state}></Bagde>
                </div>
              );
            })}
        </div>
        <div className="form-item">
          <label className="form-label">Notes:</label>
          {task?.notes &&
            task?.notes.map((note, index) => {
              return (
                <textarea
                  key={index}
                  className="form-input text-area"
                  name="note"
                  placeholder="Enter a description"
                  value={note}
                  onChange={(e) => handleChange(e, index)}
                />
              );
            })}
        </div>

        <div className="form-actions">
          <IconButton
            type={iconButton.round}
            icon={<FaSave></FaSave>}
            formAction="submit"
          ></IconButton>
        </div>
      </form>
      <div className="form-actions">
        <IconButton
          type={iconButton.round}
          icon={<IoMdArrowRoundBack></IoMdArrowRoundBack>}
          action={() => {
            handleBack();
          }}
        ></IconButton>
      </div>
    </div>
  );
};

export default TaskForm;
