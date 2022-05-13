import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
        state.isOpen = action.payload;
    },
  },
});

export const { toggleMenu } = navigationSlice.actions;

export const navStatus = (state) => state.navigation;

export default navigationSlice.reducer;
