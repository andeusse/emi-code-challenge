import React, { useEffect, useState } from 'react';
import Task from '../../components/Task/Task';
import { task } from '../../types/tasks';
import { useMockFetchData } from '../../hooks/useMockFetchData';
import './style.css';
import Alert from '../UI/Alert/Alert';
import { alert } from '../../types/alert';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../redux/slices/isLoadingSlice';
import { setTasks } from '../../redux/slices/tasksSlice';
import { useAppSelector } from '../../redux/reduxHooks';
import { deleteData, getData, getDataLength } from '../../utils/dataBase';
import Pagination from '../UI/Pagination/Pagination';
import { PAGES_NUMBER } from '../../config/config';
import { useNavigate } from 'react-router-dom';

type Props = {};

const TaskList = (props: Props) => {
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const [data, error, loading] = useMockFetchData<task[]>(`page=${page - 1}`);
  const tasks = useAppSelector((state) => state.tasks.value);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(loading));
    dispatch(setTasks(data as task[]));
  }, [data, loading, dispatch]);

  const handleTaskEdit = (id: string) => {
    navigate(`/tasks/${id}`);
  };

  const handleTaskDelete = (id: string) => {
    if (data) {
      deleteData(id);
      const newData = getData(`page=${page - 1}`);
      dispatch(setTasks(newData));
    }
  };

  return (
    <div>
      {error && !loading && (
        <Alert
          text={`Error retrieving data from the server with the error (${error})`}
          type={alert.error}
        ></Alert>
      )}
      {tasks !== null && !loading && (
        <Alert
          text="Data from the server was retrieved"
          type={alert.information}
        ></Alert>
      )}
      <div className="tasks-container">
        {tasks !== null &&
          tasks.map((task, index) => {
            return (
              <Task
                key={`${index} ${task.title}`}
                {...task}
                editTask={handleTaskEdit}
                deleteTask={handleTaskDelete}
              ></Task>
            );
          })}
      </div>
      {tasks !== null && (
        <div>
          <Pagination
            pages={Math.ceil(getDataLength() / PAGES_NUMBER)}
            currentPage={page}
            setCurrentPage={setPage}
          ></Pagination>
        </div>
      )}
    </div>
  );
};

export default TaskList;
