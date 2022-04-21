import { Button, Paper } from '@mui/material';
import React from 'react';
import useDates from '../useDates.js';

const DaySheetModal = props => {
	const { activeDate } = useDates();

	if (activeDate) {
		const { date, title, location, notes, timeslots, contacts } = activeDate;

		const copy = `${date}
${title}
    
${location}
    
NOTES
${notes}
    
SCHEDULE
${timeslots.map(timeslot => `${timeslot.startTime}: ${timeslot.description}`).join('\n')}
    
CONTACTS
${contacts
	.map(
		({ name, title, phone, email }) =>
			`${name} (${title})\n ${phone ? phone + '\n' : ''}${email ? email + '\n' : ''}`,
	)
	.join('\n')}`;

		const handleClick = e => {
			navigator.clipboard.writeText(copy);
		};

		return (
			<Paper className='p-3' sx={{ whiteSpace: 'pre-line' }}>
				<div>
					<Button onClick={handleClick} size='small'>
						COPY TO CLIPBOARD
					</Button>
				</div>
				{copy}
			</Paper>
		);
	}
};

export default DaySheetModal;
