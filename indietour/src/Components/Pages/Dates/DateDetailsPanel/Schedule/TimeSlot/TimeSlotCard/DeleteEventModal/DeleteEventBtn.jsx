import { Button } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import useDates from 'Components/Pages/Dates/useDates.js';
import React from 'react';

const DeleteEventBtn = () => {
	const { closeDeleteModal } = useModal();
	const { events, activeEvent, activeDate, selectEvent, editActiveDate } = useDates();

	const handleClick = () => {
		const updatedEvents = [...events];
		const i = updatedEvents.findIndex(({ key }) => key === activeEvent.key);
		updatedEvents.splice(i, 1);
		const updatedDate = { ...activeDate, timeslots: updatedEvents };
		editActiveDate(updatedDate);
		selectEvent(null);
		closeDeleteModal();
	};
	return (
		<Button fullWidth color='error' variant='contained' onClick={handleClick}>
			YES, REMOVE EVENT
		</Button>
	);
};

export default DeleteEventBtn;
