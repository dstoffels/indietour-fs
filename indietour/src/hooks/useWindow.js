import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWindowSize } from 'redux/windowSlice.js';

const useWindow = () => {
	const dispatch = useDispatch();
	const { isMobile } = useSelector(state => state);

	const updatePredicate = () => {
		dispatch(setWindowSize(window.innerWidth < 900));
	};

	useEffect(() => {
		window.addEventListener('resize', updatePredicate);

		return () => window.removeEventListener('resize', updatePredicate);
	}, [isMobile]);

	useEffect(() => {
		updatePredicate();
	}, []);

	return { isMobile };
};

export default useWindow;
