import { useDispatch, useSelector } from 'react-redux';
import { setActiveMemberAndGetMembers } from 'redux/userSlice.js';
import { createNewBand, deleteActiveBand, editBand } from './bandsSlice.js';

const useBands = () => {
	const dispatch = useDispatch();
	const { bands, members, user } = useSelector(state => state);
	const activeMember = user?.activeMember;

	const selectBand = band => dispatch(setActiveMemberAndGetMembers(band));

	// New Band
	const createBand = form => dispatch(createNewBand(form));

	// Edit Band
	const updateBand = form => dispatch(editBand(form));

	// Delete Band
	const deleteBand = () => dispatch(deleteActiveBand());

	return {
		bands,
		members,
		activeMember,
		selectBand,
		createBand,
		updateBand,
		deleteBand,
	};
};

export default useBands;
