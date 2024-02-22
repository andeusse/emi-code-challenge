import { configureStore } from '@reduxjs/toolkit';

import { isLoadingReducer } from './slices/isLoadingSlice';
import { tasksReducer } from './slices/tasksSlice';

export const store = configureStore({
  reducer: {
    isLoading: isLoadingReducer,
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
