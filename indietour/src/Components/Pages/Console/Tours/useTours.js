import { useDispatch, useSelector } from 'react-redux';
import { setActiveTourAndFetchDates, setUser } from 'redux/userSlice.js';
import { createNewTour, deleteActiveTour, editTour } from './toursSlice.js';

const useTours = () => {
	const dispatch = useDispatch();
	const { user, tours } = useSelector(state => state);

	const activeTour = user?.activeMember?.activeTour;

	const activeTourDates =
		activeTour?.dates &&
		[...activeTour?.dates].sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

	const selectTour = tour => dispatch(setActiveTourAndFetchDates(tour));

	const createTour = form => dispatch(createNewTour(form));

	const updateTour = data => {
		// calculate new tour info
		const { dates } = data;
		data = {
			...data,
			startDate: dates[0]?.date || '',
			endDate: dates[dates.length - 1]?.date || '',
			numDates: dates.length,
		};

		dispatch(editTour(data));
	};

	const deleteTour = path => dispatch(deleteActiveTour(path));

	return {
		tours,
		activeTour,
		activeTourDates,
		selectTour,
		createTour,
		updateTour,
		deleteTour,
	};
};

export default useTours;
