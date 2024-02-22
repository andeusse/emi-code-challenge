import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type isLoadingState = {
  value: boolean;
};

const initialState: isLoadingState = {
  value: false,
};

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.value = action.payload;
    },
  },
});

export const { setIsLoading } = isLoadingSlice.actions;

export const isLoadingReducer = isLoadingSlice.reducer;
