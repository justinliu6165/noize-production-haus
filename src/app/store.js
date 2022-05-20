import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/_counter/counterSlice';
import navigationReducer from '../features/navigation/navigationSlice';
import carouselReducer from '../features/carousel/CarouselSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    cases: carouselReducer
  },
});
