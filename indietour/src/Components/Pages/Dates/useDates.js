import { useDispatch, useSelector } from 'react-redux';
import useTours from '../Console/Tours/useTours.js';
import {
	clearDateControls,
	setActiveContact,
	setActiveDate,
	setActiveEvent,
	setEditing,
	setPastDates,
	updateActiveDate,
} from './datesSlice.js';

const useDates = () => {
	const dispatch = useDispatch();
	const activeTourDates = useSelector(state => state.user?.activeMember?.activeTour?.dates);
	const { showPastDates, activeDate, editing, originalData, activeEvent, activeContact } =
		useSelector(state => state.dateControls);

	const today = activeTourDates?.find(({ date }) => date === new Date().toDateString());

	const events = activeDate?.timeslots;

	const contacts = activeDate?.contacts;

	const unsavedChanges = JSON.stringify(activeDate) !== JSON.stringify(originalData);

	const selectTourDate = tourDate => dispatch(setActiveDate(tourDate));

	const deselectTourDate = () => dispatch(setActiveDate(null));

	const togglePastDates = () => dispatch(setPastDates(!showPastDates));

	const resetDateControls = () => dispatch(clearDateControls());

	const toggleEditMode = () => {
		dispatch(setEditing(!editing));
		dispatch(setActiveEvent(null));
	};

	const editActiveDate = data => dispatch(updateActiveDate(data));

	const revertActiveDate = () => {
		dispatch(setActiveDate(originalData));
		dispatch(setActiveEvent(null));
	};

	const selectEvent = event => dispatch(setActiveEvent(event));

	const selectContact = contact => dispatch(setActiveContact(contact));

	return {
		activeTourDates,
		today,
		showPastDates,
		activeDate,
		originalData,
		selectTourDate,
		togglePastDates,
		deselectTourDate,
		editing,
		toggleEditMode,
		unsavedChanges,
		editActiveDate,
		revertActiveDate,
		events,
		activeEvent,
		selectEvent,
		contacts,
		activeContact,
		selectContact,
		resetDateControls,
	};
};

export default useDates;
