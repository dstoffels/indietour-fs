import React from 'react';
import useDates from '../../useDates.js';
import AddEventBtn from './AddEventBtn.jsx';
import EventCard from './TimeSlot/TimeSlotCard/EventCard.jsx';

export const Event = date => {
	return {
		date,
		type: 'Event',
		description: '',
		startTime: '12:00',
		startAfterMidnight: false,
		startLocation: '',
		startTZ: '',
		endTime: '',
		endAfterMidnight: false,
		endLocation: '',
		endTZ: '',
		key: Math.random(),
	};
};

const Schedule = () => {
	const { events } = useDates();

	const eventCards = events.map((event, i, a) => (
		<EventCard key={event.key} i={i} event={event} isFirst={i === 0} isLast={i === a.length - 1} />
	));

	return (
		<div>
			<AddEventBtn />
			{eventCards}
		</div>
	);
};

export default Schedule;
