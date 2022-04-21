import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { closeDeleteModal } from 'Components/Common/DeleteModal/deleteModalSlice.js';
import { closeModal } from 'Components/Common/MainModal/mainModalSlice.js';
import thunkErrorHandler from 'redux/errorHandler.js';
import { setActiveTourAndFetchDates } from 'redux/userSlice.js';
import { restPath, toursPath } from 'utils/restPaths.js';

// ACTIONS
const NEW = 'tours/new';
const FETCH = 'tours/fetch';
const EDIT = 'tours/edit';
const DELETE = 'tours/delete';

// THUNKS

/**
 * CREATE TOUR
 */
export const createNewTour = createAsyncThunk(NEW, async (form, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { user } = getState();

	thunkErrorHandler(thunkAPI, async token => {
		const response = await axios.post(toursPath(user.activeMember.bandPath), form, token);

		await dispatch(setActiveTourAndFetchDates(response.data));

		dispatch(fetchTours());

		dispatch(closeModal());
	});
});

/**
 * FETCH TOURS
 */
export const fetchTours = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const { user } = thunkAPI.getState();

	thunkErrorHandler(thunkAPI, async token => {
		const response =
			Boolean(user.activeMember) && (await axios.get(toursPath(user.activeMember.bandPath), token));
		thunkAPI.dispatch(toursSlice.actions.setTours(response.data));
	});
});

export const editTour = createAsyncThunk(EDIT, async (form, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { user } = getState();

	thunkErrorHandler(thunkAPI, async token => {
		const response = await axios.put(restPath(user.activeMember.activeTour.path), form, token);
		await dispatch(setActiveTourAndFetchDates(response.data));
		dispatch(closeModal());
	});
});

/**
 * DELETE TOUR
 */
export const deleteActiveTour = createAsyncThunk(DELETE, async (path, thunkAPI) => {
	const { dispatch } = thunkAPI;

	thunkErrorHandler(thunkAPI, async token => {
		const response = await axios.delete(restPath(path), token);

		dispatch(closeDeleteModal());
		dispatch(closeModal());

		dispatch(toursSlice.actions.setTours(response.data));
		dispatch(setActiveTourAndFetchDates());
	});
});

// TODO: ARCHIVE TOUR THUNK

// REDUCER

const initialState = [];
export const toursSlice = createSlice({
	name: 'tours',
	initialState,
	reducers: {
		setTours: (state, action) => action.payload,
		clearTours: () => initialState,
	},
});

export const { clearTours } = toursSlice.actions;
export const tours = toursSlice.reducer;
