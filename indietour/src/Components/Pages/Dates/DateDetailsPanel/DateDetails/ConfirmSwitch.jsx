import { FormControlLabel, Switch } from '@mui/material';
import React from 'react';
import { eventBldr } from 'utils/helpers.js';

const ConfirmSwitch = ({ value, onChange }) => {
	const handleClick = () => onChange(eventBldr('isConfirmed', !value));

	const color = value ? 'primary' : 'text.disabled';

	return (
		<div>
			<FormControlLabel
				componentsProps={{ typography: { color: 'primary', variant: 'button' } }}
				label='Confirmed'
				control={<Switch checked={value} onChange={handleClick} className='mx-auto' />}
			/>
		</div>
	);
};

export default ConfirmSwitch;
