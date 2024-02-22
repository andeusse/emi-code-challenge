import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { task } from '../../types/tasks';

type taskState = {
  value: task[];
};

const initialState: taskState = {
  value: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    setTasks(state, action: PayloadAction<task[]>) {
      state.value = action.payload;
    },
  },
});

export const { setTasks } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
