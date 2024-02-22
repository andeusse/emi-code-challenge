import moment from 'moment';
import { PAGES_NUMBER } from '../config/config';
import { states, task } from '../types/tasks';
import jsonFile from './db.json';

let data = jsonFile.tasks;

export const getDataLength = (): number => {
  return data.length;
};

export const getData = (page: string | null = null): task[] => {
  if (page) {
    const searchParams = new URLSearchParams(page);
    const paginationString = searchParams.get('page');
    let pagination = paginationString !== null ? parseInt(paginationString) : 0;
    const pageTasks = data.slice(
      pagination * PAGES_NUMBER,
      pagination * PAGES_NUMBER + PAGES_NUMBER
    );
    return pageTasks as task[];
  }
  return data as task[];
};

export const getDataById = (id: string | undefined): task => {
  const d = data.find((d) => d.title === id);
  if (d === undefined) {
    return DEFAULT_TASK;
  }
  return d as task;
};

export const deleteData = (id: string) => {
  data = data.filter((d) => d.title !== id);
};

export const setData = (id: string, task: task) => {
  data = data.map((d) => {
    if (d.title === id) {
      return task;
    }
    return d;
  });
};

export const addData = (task: task) => {
  data.unshift(task);
};

const DEFAULT_TASK: task = {
  title: '',
  description: '',
  dueDate: '',
  completed: false,
  stateHistory: [{ state: states.new, date: moment().format('YYYY-MM-DD') }],
  notes: [],
};
