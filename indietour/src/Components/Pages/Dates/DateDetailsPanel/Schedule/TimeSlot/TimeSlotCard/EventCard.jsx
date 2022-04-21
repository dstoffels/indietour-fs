import { Card, CardActionArea, CardContent, Divider, Stack, Typography } from '@mui/material';
import useDates from 'Components/Pages/Dates/useDates.js';
import React from 'react';
import Timeblock from './TimeBlock.jsx';
import EventForm from './EventForm.jsx';
import useModal from 'Components/Common/MainModal/useModal.js';

const EventCard = ({ event, i, isFirst, isLast }) => {
	const { editing, unsavedChanges, activeEvent, selectEvent } = useDates();
	const { openDeleteModal, modalKeys } = useModal();

	const isSelected = activeEvent?.key === event?.key;

	const handleClick = () => {
		editing && !isSelected && unsavedChanges
			? openDeleteModal(modalKeys.discardDateChanges)
			: selectEvent(event);
	};

	const content =
		editing && isSelected ? (
			<EventForm event={event} i={i} />
		) : (
			<CardActionArea onClick={handleClick}>
				<CardContent className='p-2 flex-start w-100'>
					<Timeblock isFirst={isFirst} isLast={isLast} />
					<Stack>
						<Typography variant='body2'>{`${event.startTime} ${
							event.endTime && `- ${event.endTime}`
						}`}</Typography>
						<Typography variant='subtitle1'>{event.description}</Typography>
					</Stack>
				</CardContent>
			</CardActionArea>
		);

	return (
		<>
			<Card elevation={isSelected ? 4 : 1} className='flex-between'>
				{content}
			</Card>
			{!isLast && <Divider />}
		</>
	);
};

export default EventCard;
