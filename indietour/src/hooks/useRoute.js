import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setPrevPage } from 'Components/Common/BottomNav/navSlice.js';

const useRoute = page => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setCurrentPage(page));
		return () => dispatch(setPrevPage(page));
	}, []);
};

export default useRoute;
