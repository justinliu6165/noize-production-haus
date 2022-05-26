import { createSlice } from '@reduxjs/toolkit';
import { caseStudies } from './caseStudies';

const initialState = {
    caseStudies
};

export const caseStudiesSlice = createSlice({
    name: 'carousel',
    initialState
});

export const selectCaseStudies = (state) => state.cases.caseStudies;

export default caseStudiesSlice.reducer;
