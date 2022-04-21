import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from 'hooks/useUser.js';
import { HOME, PASSWORD, WAITING_ROOM } from 'constants/routes.js';
import { auth } from 'fb/firebase.js';

const Authenticate = ({ children }) => {
	const navigate = useNavigate();
	const { user } = useUser();

	const verifyCurrentUser = () => {
		if (!user) {
			navigate(HOME);
			return null;
		}

		if (!auth?.currentUser?.emailVerified) {
			navigate(WAITING_ROOM);
			return null;
		}

		if (!user.hasValidPW) {
			navigate(PASSWORD);
			return null;
		}
		// setAuthenticated(true);
	};

	useEffect(verifyCurrentUser, [user]);

	return children;
};

export default Authenticate;
