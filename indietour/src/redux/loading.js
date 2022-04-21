import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
	name: 'loading',
	initialState: false,
	reducers: {
		beginLoading: state => true,
		endLoading: state => false,
	},
});

export const { beginLoading, endLoading } = loadingSlice.actions;
export const loading = loadingSlice.reducer;
