import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from '../features/tracker/tracker';

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
});
