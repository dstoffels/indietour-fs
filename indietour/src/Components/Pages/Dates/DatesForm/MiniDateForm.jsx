import { LocalizationProvider } from '@mui/lab';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import Adapter from '@mui/lab/AdapterDateFns';
import PickersDay from '@mui/lab/PickersDay';
import RemoveTourDateBtn from './RemoveTourDateBtn.jsx';
import { TourDate } from 'Components/Pages/Console/Tours/TourForm/DateRangePicker.jsx';

const MiniDateForm = ({ i, tourDate, onChange, dates, setDates }) => {
	const [open, setOpen] = useState(tourDate.date === '');
	const [date, setDate] = useState(tourDate.date);
	const [title, setTitle] = useState(tourDate.title);

	const existingDates = dates.map(date => new Date(date.date).toDateString());

	return (
		<div>
			<Stack direction='row' spacing={1}>
				<LocalizationProvider dateAdapter={Adapter}>
					<MobileDatePicker
						open={open}
						onOpen={() => setOpen(true)}
						showTodayButton
						showToolbar={false}
						value={date}
						onChange={date => {
							const dateStr = new Date(date).toDateString();
							onChange(i, TourDate(dateStr, title));
							setDate(dateStr);
							setOpen(!open);
						}}
						disableCloseOnSelect={false}
						renderDay={(day, _value, DayProps) => {
							const hasDate = existingDates.includes(day.toDateString());
							return (
								<PickersDay
									{...DayProps}
									sx={{ bgcolor: hasDate && 'rgba(0,0,0,0.15)' }}
									disabled={hasDate}
								/>
							);
						}}
						renderInput={params => (
							<TextField
								{...params}
								required
								size='small'
								label='Date'
								color='primary'
								value={date}
								InputProps={{
									sx: {
										fontSize: 'smaller',
									},
								}}
							/>
						)}
						DialogProps={{
							PaperProps: {
								elevation: 0,
							},
						}}
					/>
				</LocalizationProvider>
				<TextField
					onBlur={() => {
						onChange(i, TourDate(date, title));
					}}
					size='small'
					type='text'
					name='title'
					fullWidth
					label='Title'
					value={title}
					onChange={e => {
						setTitle(e.target.value);
					}}
					InputProps={{
						sx: {
							fontSize: 'smaller',
						},
					}}
				/>
				<RemoveTourDateBtn i={i} tourDates={dates} setTourDates={setDates} />
			</Stack>
		</div>
	);
};

export default MiniDateForm;
