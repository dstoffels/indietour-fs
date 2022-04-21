import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import useDates from '../../useDates.js';
import { Event } from './Schedule.jsx';

const AddEventBtn = () => {
	const { editing, activeDate, editActiveDate, selectEvent } = useDates();

	const handleClick = () => {
		const newEvent = Event(activeDate.date);
		const timeslots = [...activeDate.timeslots, newEvent];
		editActiveDate({ ...activeDate, timeslots });
		selectEvent(newEvent);
	};

	return editing ? (
		<Button
			onClick={handleClick}
			sx={{
				position: 'sticky',
				marginRight: 2,
				top: 0,
				left: '75%',
				zIndex: 10000000,
			}}
			size='large'
			startIcon={<Add />}>
			ADD EVENT
		</Button>
	) : null;
};

export default AddEventBtn;
