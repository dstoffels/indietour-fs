import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import thunkErrorHandler from 'redux/errorHandler.js';
import { setActiveMember } from 'redux/userSlice.js';
import { membersPath, restPath } from 'utils/restPaths.js';

// ACTIONS
const FETCH = 'members/fetchMembers';
const UPDATE = 'members/UPDATE';

export const fetchMembers = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	await thunkErrorHandler(thunkAPI, async token => {
		const { user } = thunkAPI.getState();

		const response =
			Boolean(user.activeMember) &&
			(await axios.get(membersPath(user.activeMember.bandPath), token));
		thunkAPI.dispatch(membersSlice.actions.setMembers(response.data));
	});
});

export const updateMember = createAsyncThunk(UPDATE, async (member, thunkAPI) => {
	await thunkErrorHandler(thunkAPI, async token => {
		const { dispatch, getState } = thunkAPI;
		const { user, members } = getState();

		axios.put(restPath(member.path), member, token);

		// update members in state accordingly
		// FIXME: is it necessary to check member is active?
		if (user.activeMember.email === member.email) dispatch(setActiveMember(member));

		const i = members.findIndex(m => m.email === member.email);
		const updatedMembers = [...members];
		updatedMembers[i] = member;
		dispatch(setMembers(updatedMembers));
	});
});

const initialState = [];
export const membersSlice = createSlice({
	name: 'members',
	initialState,
	reducers: {
		setMembers: (state, action) => (state = action.payload),
		clearMembers: state => (state = initialState),
	},
});

export const { clearMembers, setMembers } = membersSlice.actions;
export const members = membersSlice.reducer;
