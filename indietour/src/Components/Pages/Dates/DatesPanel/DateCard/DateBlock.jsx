import { Stack, Typography } from '@mui/material';
import React from 'react';

const getDateObj = date => {
	const fields = date.split(' ');
	return {
		weekDay: fields[0],
		day: fields[2],
		month: fields[1],
		year: fields[3],
	};
};

const DateBlock = ({ date, fontStyle, color }) => {
	const { weekDay, day, month, year } = getDateObj(date);

	const isToday = new Date(date).toDateString() === new Date().toDateString();

	return (
		<Stack
			fontStyle={fontStyle}
			color={color}
			spacing={-1}
			padding='3px 1rem'
			textAlign='center'
			border={isToday && `1px solid`}
			borderColor='error.main'>
			<Typography variant='button' fontSize='small'>
				{weekDay}
			</Typography>
			<Typography variant='h6'>{day}</Typography>
			<Typography variant='button' fontSize='small'>
				{month}
			</Typography>
		</Stack>
	);
};

export default DateBlock;
