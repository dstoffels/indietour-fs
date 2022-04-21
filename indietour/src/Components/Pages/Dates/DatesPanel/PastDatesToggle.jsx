import { FormControlLabel, Switch } from '@mui/material';
import React from 'react';
import useDates from '../useDates.js';

const PastDatesToggle = props => {
	const { showPastDates, togglePastDates } = useDates();

	return (
		<FormControlLabel
			componentsProps={{ typography: { color: 'primary', variant: 'button' } }}
			label='Past Dates'
			control={<Switch checked={showPastDates} onClick={togglePastDates} />}
		/>
	);
};

export default PastDatesToggle;
