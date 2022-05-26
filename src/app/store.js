import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '../features/navigation/navigationSlice';
import caseStudiesReducer from '../features/api/CaseStudiesSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    cases: caseStudiesReducer
  },
});
