import React, { useState } from 'react';
import { StaticDateRangePicker } from '@mui/lab';
import { Button, Paper, Stack, Typography } from '@mui/material';
import withLocalization from 'utils/withLocalization.js';
import MuiDateRangePickerDay from '@mui/lab/DateRangePickerDay';
import { Add, Clear } from '@mui/icons-material';

export const TourDate = (date = '', title = '') => {
	return {
		date,
		title,
		isShowDay: false,
		location: '',
		deal: '',
		notes: '',
		isConfirmed: false,
		timeslots: [],
		contacts: [],
		key: Math.random(),
	};
};

const DateRangePicker = ({ onClose, dates, setDates }) => {
	const existingDates = dates.map(date => new Date(date.date).toDateString());
	const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

	const handleChange = ([startDate, endDate]) => setDateRange({ startDate, endDate });

	// increment up from startDate and create new Date string foreach, excluding existing dates
	const onApply = () => {
		const { startDate, endDate } = dateRange;
		let newDates = [];
		let newDate = startDate;
		while (newDate.toDateString() !== endDate.toDateString()) {
			!dates.map(date => new Date(date.date).toDateString()).includes(newDate.toDateString()) &&
				newDates.push(new Date(newDate));
			newDate.setDate(newDate.getDate() + 1);
		}
		newDates.push(endDate);
		setDates([...dates, ...newDates.map(date => TourDate(date.toDateString()))]);
		onClose();
	};

	const title = (
		<div className='flex-center'>
			<Typography variant='caption'>
				Set start and end dates to generate a range of tour dates. This will not affect any existing
				tour dates.
			</Typography>
		</div>
	);

	return (
		<Paper elevation={0}>
			<StaticDateRangePicker
				displayStaticWrapperAs='desktop'
				calendars={1}
				value={[dateRange.startDate, dateRange.endDate]}
				onChange={handleChange}
				renderInput={() => {}}
				renderDay={(day, DayProps) => {
					const hasDate = existingDates.includes(day.toDateString());
					return (
						<MuiDateRangePickerDay
							{...DayProps}
							sx={{ bgcolor: hasDate && 'rgba(0,0,0,0.15)' }}
							disabled={hasDate}
						/>
					);
				}}
			/>
			<Stack direction='row' spacing={2} className='flex-end p-3'>
				<Button onClick={onClose} variant='text' color='warning' startIcon={<Clear />}>
					CANCEL
				</Button>
				<Button
					disabled={!dateRange.startDate && !dateRange.endDate}
					onClick={onApply}
					variant='text'
					startIcon={<Add />}>
					Apply
				</Button>
			</Stack>
		</Paper>
	);
};

export default withLocalization(DateRangePicker);
