import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getBandPath, BANDS_PATH } from 'utils/restPaths.js';
import { setActiveMemberAndGetMembers } from 'redux/userSlice.js';
import { closeModal } from 'Components/Common/MainModal/mainModalSlice.js';
import { closeDeleteModal } from 'Components/Common/DeleteModal/deleteModalSlice.js';
import { clearTours, fetchTours } from '../Tours/toursSlice.js';
import thunkErrorHandler from 'redux/errorHandler.js';

const FETCH = 'bands/fetchUserBands';
export const fetchUserBands = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const { token } = thunkAPI.getState();
	if (token) {
		const response = await axios.get(BANDS_PATH, token);
		thunkAPI.dispatch(bandSlice.actions.setUserBands(response.data));
	}
});

const NEW = 'bands/new';
export const createNewBand = createAsyncThunk(NEW, async (form, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;

	await thunkErrorHandler(thunkAPI, async token => {
		const response = await axios.post(BANDS_PATH + '/new', form, token);
		await dispatch(fetchUserBands());
		await dispatch(setActiveMemberAndGetMembers(response.data));
		await dispatch(fetchTours());
		dispatch(closeModal());
	});
});

const EDIT = 'bands/edit';
export const editBand = createAsyncThunk(EDIT, async (form, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { user } = getState();

	await thunkErrorHandler(thunkAPI, async token => {
		const response = await axios.put(getBandPath(user.activeMember.bandId), form, token);
		await dispatch(setActiveMemberAndGetMembers(response.data));

		// ensure store.bands aren't stale
		dispatch(fetchUserBands());
		dispatch(closeModal());
	});
});

const DELETE = 'bands/delete';
export const deleteActiveBand = createAsyncThunk(DELETE, async (_, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { user } = getState();

	await thunkErrorHandler(thunkAPI, async token => {
		const response = await axios.delete(getBandPath(user.activeMember.bandId), token);

		dispatch(closeDeleteModal());
		dispatch(closeModal(false));

		dispatch(clearTours());
		dispatch(setUserBands(response.data));
		await dispatch(setActiveMemberAndGetMembers());
	});
});

const initialState = [];
export const bandSlice = createSlice({
	name: 'bands',
	initialState,
	reducers: {
		setUserBands: (state, action) => (state = action.payload),
		updateUserBands: (state, action) => {
			state = [...state, action.payload];
		},
		clearUserBands: state => (state = initialState),
	},
});

export const { clearUserBands, setUserBands } = bandSlice.actions;
export const bands = bandSlice.reducer;
