import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';

import { task, taskErrors } from '../../types/tasks';
import Bagde from '../UI/Badge/Bagde';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { addData, setData } from '../../utils/dataBase';
import { MdAddCircle } from 'react-icons/md';
import Button from '../UI/Button/Button';
import { validateForm } from '../../utils/validateForm';

type Props = {
  id: string;
  task: task;
  setTask: React.Dispatch<React.SetStateAction<task>>;
};

const TaskForm = (props: Props) => {
  const { id, task, setTask } = props;

  const [errors, setErrors] = useState<taskErrors | null>(null);

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

  const handleSubmit = () => {
    const e = validateForm(task);
    if (e.hasErrors) {
      setErrors(e);
    } else {
      if (task && id) {
        if (id === 'new') {
          addData(task);
        } else {
          setData(id, task);
        }
      }
      navigate('/tasks');
    }
  };

  const handleBack = () => {
    navigate('/tasks');
  };

  const handleAddNote = () => {
    let notes = [...task.notes];
    notes.push('');
    setTask({ ...task, notes: notes });
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-item">
          <label className="form-label">Title:</label>
          <input
            className={`form-input ${errors && errors.title ? 'error' : ''}`}
            type="text"
            name="title"
            placeholder="Enter a title"
            value={task?.title}
            onChange={(e) => handleChange(e)}
          />
          {errors && errors.title && (
            <p className="form-input-error">{errors.title}</p>
          )}
        </div>
        <div className="form-item">
          <label className="form-label">Description:</label>
          <textarea
            className={`form-input text-area ${
              errors && errors.description ? 'error' : ''
            }`}
            name="description"
            placeholder="Enter a description"
            value={task?.description}
            onChange={(e) => handleChange(e)}
          />
          {errors && errors.description && (
            <p className="form-input-error">{errors.description}</p>
          )}
        </div>
        <div className="form-item">
          <label className="form-label">Due Date:</label>
          <input
            className={`form-input ${errors && errors.dueDate ? 'error' : ''}`}
            type="date"
            name="dueDate"
            value={task?.dueDate}
            onChange={(e) => handleChange(e)}
          />
          {errors && errors.dueDate && (
            <p className="form-input-error">{errors.dueDate}</p>
          )}
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
        <div className="form-item form-item-badges">
          <label className="form-label">State History:</label>
          {task?.stateHistory &&
            task?.stateHistory.map((sh, index) => {
              return (
                <span key={`${index} ${sh.state}`} className="form-badge">
                  <Bagde text={` on ${sh.date}`} type={sh.state}></Bagde>
                </span>
              );
            })}
        </div>
        <div className="form-item">
          <label className="form-label">Notes:</label>
          {task?.notes &&
            task?.notes.map((note, index) => {
              return (
                <div key={index}>
                  <textarea
                    className={`form-input text-area ${
                      errors && errors.notes[index] ? 'error' : ''
                    }`}
                    name="note"
                    placeholder="Enter a note"
                    value={note}
                    onChange={(e) => handleChange(e, index)}
                  />
                  {errors && errors.notes[index] && (
                    <p className="form-input-error">{errors.notes[index]}</p>
                  )}
                </div>
              );
            })}
        </div>
      </form>
      <div className="form-actions">
        <Button
          text="Save"
          startIcon={<FaSave></FaSave>}
          className="form-action-button"
          action={() => {
            handleSubmit();
          }}
        ></Button>
        <Button
          text="Add Note"
          startIcon={<MdAddCircle></MdAddCircle>}
          className="form-action-button"
          action={() => {
            handleAddNote();
          }}
        ></Button>
        <Button
          text="Cancel"
          startIcon={<IoMdArrowRoundBack></IoMdArrowRoundBack>}
          className="form-action-button"
          action={() => {
            handleBack();
          }}
        ></Button>
      </div>
    </div>
  );
};

export default TaskForm;
