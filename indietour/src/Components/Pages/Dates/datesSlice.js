import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showPastDates: false,
	editing: false,
	activeDate: null,
	originalData: null,
	activeEvent: null,
	activeContact: null,
};

export const datesSlice = createSlice({
	name: 'dateControls',
	initialState,
	reducers: {
		setPastDates: (state, action) => {
			state.showPastDates = action.payload;
		},
		setActiveDate: (state, action) => {
			state.activeDate = action.payload;
			datesSlice.caseReducers.setOriginalData(state, action);
		},

		setEditing: (state, action) => {
			state.editing = action.payload;
		},

		updateActiveDate: (state, action) => {
			state.activeDate = action.payload;
		},

		setOriginalData: (state, action) => {
			state.originalData = action.payload;
		},

		setActiveEvent: (state, action) => {
			state.activeEvent = action.payload;
		},

		setActiveContact: (state, action) => {
			state.activeContact = action.payload;
		},
		clearDateControls: () => initialState,
	},
});

export const {
	setPastDates,
	setActiveDate,
	setEditing,
	updateActiveDate,
	setOriginalData,
	setActiveEvent,
	setActiveContact,
	clearDateControls,
} = datesSlice.actions;
export const dateControls = datesSlice.reducer;
