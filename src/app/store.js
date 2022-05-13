import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/_counter/counterSlice';
import navigationReducer from '../features/navigation/navigationSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer
  },
});
