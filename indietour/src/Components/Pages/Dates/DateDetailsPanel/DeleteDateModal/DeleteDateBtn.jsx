import React from 'react';
import useModal from 'Components/Common/MainModal/useModal.js';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import useDates from '../../useDates.js';
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';

const DeleteDateBtn = () => {
	const { unsavedChanges, activeTourDates, activeDate, selectTourDate } = useDates();
	const { updateTour, activeTour } = useTours();
	const { closeDeleteModal } = useModal();

	const handleClick = () => {
		const dates = [...activeTourDates];
		const i = dates.findIndex(({ date }) => date === activeDate.date);
		dates.splice(i, 1);
		const updatedTour = { ...activeTour, dates };
		updateTour(updatedTour);
		selectTourDate(null);
		closeDeleteModal();
	};

	return (
		<Button
			color='error'
			variant='contained'
			fullWidth
			onClick={handleClick}
			startIcon={<Delete />}>
			Delete
		</Button>
	);
};

export default DeleteDateBtn;
