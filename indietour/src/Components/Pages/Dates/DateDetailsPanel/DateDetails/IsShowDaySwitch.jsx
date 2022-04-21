import { FormControlLabel, Switch } from '@mui/material';
import { TourDate } from 'Components/Pages/Console/Tours/TourForm/DateRangePicker.jsx';
import React from 'react';
import { eventBldr } from 'utils/helpers.js';

const IsShowDaySwitch = ({ value, onChange }) => {
	const handleClick = () => onChange(eventBldr('isShowDay', !value));

	return (
		<div>
			<FormControlLabel
				componentsProps={{ typography: { color: 'primary', variant: 'button' } }}
				label='Show Day'
				control={<Switch checked={value} onChange={handleClick} className='mx-auto' />}
			/>
		</div>
	);
};

export default IsShowDaySwitch;
