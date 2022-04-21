import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, setActiveMemberAndGetMembers } from 'redux/userSlice.js';

const useUser = () => {
	const dispatch = useDispatch();
	const { user, bands, token } = useSelector(state => state);
	const role = user?.activeMember?.role;

	const selectBand = bandName => dispatch(setActiveMemberAndGetMembers(bandName));
	const refreshUser = async () => await dispatch(fetchUser());

	return { user, token, role, selectBand, refreshUser };
};

export default useUser;
