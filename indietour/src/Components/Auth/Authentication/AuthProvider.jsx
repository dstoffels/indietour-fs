import { clearUserBands } from 'Components/Pages/Console/Bands/bandsSlice.js';
import { clearMembers } from 'Components/Pages/Console/Bands/membersSlice.js';
import { clearTours } from 'Components/Pages/Console/Tours/toursSlice.js';
import { auth } from 'fb/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearUser, fetchUser } from 'redux/userSlice.js';
import { clearToken, setToken } from './authSlice.js';

const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		// authstate does not auto refresh token, must be done manually ¯\_(ツ)_/¯
		const unsubAuth = onAuthStateChanged(auth, async user => {
			if (user) {
				const token = { headers: { auth: user.accessToken } };
				dispatch(setToken(token));
				dispatch(fetchUser());
			} else {
				dispatch(clearUser());
				dispatch(clearToken());
				dispatch(clearMembers());
				dispatch(clearUserBands());
				dispatch(clearTours());
			}
		});

		return () => {
			unsubAuth();
		};
	}, []);

	return children;
};

export default AuthProvider;
