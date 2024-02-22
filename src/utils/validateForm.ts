import { task, taskErrors } from '../types/tasks';

export const validateForm = (task: task): taskErrors => {
  const taskErrors: taskErrors = {
    hasErrors: false,
    title: '',
    description: '',
    dueDate: '',
    notes: [],
  };

  if (task.title === '') {
    taskErrors.title = 'You must enter a title';
    taskErrors.hasErrors = true;
  } else if (task.title.length < 4) {
    taskErrors.title = 'Title must be longer than 3';
    taskErrors.hasErrors = true;
  }

  if (task.description === '') {
    taskErrors.description = 'You must add a description';
    taskErrors.hasErrors = true;
  }

  if (task.dueDate === '') {
    taskErrors.dueDate = 'You must enter a due date';
    taskErrors.hasErrors = true;
  }

  for (let i = 0; i < task.notes.length; i++) {
    taskErrors.notes.push('');
    if (task.notes[i] === '') {
      taskErrors.notes[i] = `Note number ${i + 1} must have a value`;
      taskErrors.hasErrors = true;
    }
  }

  return taskErrors;
};
