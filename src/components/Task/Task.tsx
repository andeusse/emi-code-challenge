import { task } from '../../types/tasks';
import Bagde from '../UI/Badge/Bagde';
import IconButton from '../UI/IconButton/IconButton';
import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';

import './style.css';
import { iconButton } from '../../types/iconButton';

type Props = {
  editTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

const Task = (props: task & Props) => {
  const {
    title,
    description,
    dueDate,
    completed,
    stateHistory,
    notes,
    editTask,
    deleteTask,
  } = props;

  const lastStateHistory = stateHistory[stateHistory.length - 1];

  return (
    <>
      <div
        className={`task-container ${
          completed ? 'task-completed' : 'task-incompleted'
        }`}
      >
        <h2 className="task-title">{title}</h2>
        <div className="task-content">
          <p className="task-description">{description}</p>
          <p>
            <span>
              Due Date: <span>{dueDate.toString()}</span>
            </span>
          </p>
          {lastStateHistory !== undefined && (
            <div className="task-last-state">
              <h3>Last State:</h3>
              <div className="task-last-state-badge">
                <Bagde
                  type={lastStateHistory.state}
                  text={` on ${lastStateHistory.date.toString()}`}
                ></Bagde>
              </div>
            </div>
          )}
          <h3>Notes</h3>
          <ul className="task-notes-list">
            {notes.map((note, index) => {
              return (
                <li key={index + note} className="task-notes-item">
                  {note}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="task-actions">
          <IconButton
            icon={<MdEdit></MdEdit>}
            type={iconButton.round}
            action={() => {
              editTask(title);
            }}
          ></IconButton>
          <IconButton
            icon={<FaTrash></FaTrash>}
            type={iconButton.round}
            action={() => {
              deleteTask(title);
            }}
          ></IconButton>
        </div>
      </div>
    </>
  );
};

export default Task;
