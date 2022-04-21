import { Add, DateRangeOutlined } from '@mui/icons-material';
import { Button, Dialog, Stack } from '@mui/material';
import DateRangePicker, {
	TourDate,
} from 'Components/Pages/Console/Tours/TourForm/DateRangePicker.jsx';
import React, { memo, useState } from 'react';
import MiniDateForm from './MiniDateForm.jsx';

const DatesForm = ({ dates, setDates }) => {
	const [showDateRange, setShowDateRange] = useState(false);

	const setSortedDates = newDates => {
		setDates(newDates.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)));
	};

	const handleNewDateForm = e => {
		const newDates = [...dates, TourDate()];
		setDates(newDates);
	};

	const handleChange = (i, date) => {
		const newDates = [...dates];
		newDates[i] = date;
		setSortedDates(newDates);
	};

	const miniDateForms = dates.map((date, i) => {
		return (
			<MiniDateForm
				key={date.key}
				i={i}
				tourDate={date}
				dates={dates}
				setDates={setDates}
				onChange={handleChange}
			/>
		);
	});

	return (
		<div>
			<Dialog sx={{ padding: '0' }} open={showDateRange}>
				<DateRangePicker
					dates={dates}
					setDates={setSortedDates}
					onClose={() => setShowDateRange(false)}
				/>
			</Dialog>
			<Stack spacing={1} marginY={3}>
				{miniDateForms}
				<Stack direction='row' spacing={2} className='flex-end'>
					<Button onClick={handleNewDateForm} startIcon={<Add />}>
						ADD DATE
					</Button>
					<Button onClick={() => setShowDateRange(true)} startIcon={<DateRangeOutlined />}>
						ADD DATE RANGE
					</Button>
				</Stack>
			</Stack>
		</div>
	);
};

export default memo(DatesForm);
