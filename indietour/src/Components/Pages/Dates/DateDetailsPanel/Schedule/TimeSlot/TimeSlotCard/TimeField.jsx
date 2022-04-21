import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { eventBldr } from 'utils/helpers.js';

import './TimeField.css';

const TimeField = ({ name, value, onChange, label, required, icon }) => {
	// will this need to be parsed to include the date?
	// what about the timezone?

	return (
		<TextField
			name={name}
			value={value}
			onChange={onChange}
			fullWidth
			required={required}
			type='time'
			label={label}
			size='small'
			InputProps={{ endAdornment: icon }}
			inputProps={{ step: '900' }}
		/>
	);
};

export default TimeField;
