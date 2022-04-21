import { createSlice } from '@reduxjs/toolkit';

const initialState = false;
export const windowSlice = createSlice({
	name: 'window',
	initialState,
	reducers: {
		setWindowSize: (state, action) => action.payload,
	},
});

export const { setWindowSize } = windowSlice.actions;
export const isMobile = windowSlice.reducer;
