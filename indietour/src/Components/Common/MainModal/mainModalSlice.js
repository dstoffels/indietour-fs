import { createSlice } from '@reduxjs/toolkit';

export const mainModalSlice = createSlice({
	name: 'mainModal',
	initialState: '',
	reducers: {
		showModal: (state, action) => action.payload,
		closeModal: state => '',
	},
});

export const { showModal, closeModal } = mainModalSlice.actions;
export const mainModal = mainModalSlice.reducer;
