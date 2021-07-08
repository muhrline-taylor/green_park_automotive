import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import routeReducer from '../features/routeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    route: routeReducer,
  },
});
