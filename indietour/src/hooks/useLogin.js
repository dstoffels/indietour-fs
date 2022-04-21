import useDates from 'Components/Pages/Dates/useDates.js';
import { DATES, TODAY } from 'constants/routes.js';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from './useUser.js';

//**Fetches user's data with a single action */
const useLogin = () => {
	const navigate = useNavigate();
	const { user } = useUser();
	const { today } = useDates();

	useEffect(() => {
		if (user) {
			navigate(today ? TODAY : DATES);
		}
	}, [user]);
};

export default useLogin;
