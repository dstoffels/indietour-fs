import { LocalizationProvider, MobileDatePicker, PickersDay } from '@mui/lab';
import Adapter from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import { useState } from 'react';
import withLocalization from 'utils/withLocalization.js';

const DatePicker = ({ value, onChange, tourDates, size }) => {
	const [open, setOpen] = useState(value === '');

	const existingDates = tourDates.map(date => new Date(date.date).toDateString());

	return (
		<LocalizationProvider dateAdapter={Adapter}>
			<MobileDatePicker
				open={open}
				onOpen={() => setOpen(true)}
				showTodayButton
				showToolbar={false}
				value={value}
				onChange={date => {
					const dateStr = new Date(date).toDateString();
					onChange({ target: { name: 'date', value: dateStr } });
					// setDate(dateStr);
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
						size={size}
						label='Date'
						color='primary'
						value={value}
						InputProps={{
							sx: {
								fontSize: size === 'small' && 'smaller',
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
	);
};

export default withLocalization(DatePicker);
