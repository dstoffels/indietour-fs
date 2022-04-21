import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authHeader } from 'fb/firebase.js';

const FETCH = 'token/fetch';
export const fetchToken = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const { dispatch } = thunkAPI;
	const token = await authHeader();
	dispatch(authSlice.actions.setToken(token));
	return token;
});

const initialState = null;
export const authSlice = createSlice({
	name: 'token',
	initialState,
	reducers: {
		setToken: (state, action) => action.payload,
		clearToken: state => initialState,
	},
});

export const { clearToken, setToken } = authSlice.actions;
export const token = authSlice.reducer;
