import { Save } from '@mui/icons-material';
import { Button } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import React from 'react';
import useDates from '../useDates.js';

const SaveDateBtn = () => {
	const {
		unsavedChanges,
		activeTourDates,
		activeDate,
		selectTourDate,
		selectContact,
		selectEvent,
	} = useDates();
	const { updateTour, activeTour } = useTours();
	const { closeDeleteModal } = useModal();

	const handleClick = () => {
		const dates = [...activeTourDates];
		const i = dates.findIndex(({ date }) => date === activeDate.date);
		dates[i] = activeDate;
		const updatedTour = { ...activeTour, dates };
		updateTour(updatedTour);
		selectTourDate(activeDate);
		selectEvent(null);
		selectContact(null);
		closeDeleteModal();
	};

	return (
		<Button color='primary' onClick={handleClick} disabled={!unsavedChanges} startIcon={<Save />}>
			SAVE
		</Button>
	);
};

export default SaveDateBtn;
