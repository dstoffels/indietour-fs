import { TextField } from '@mui/material';
import React from 'react';

const EmailField = ({ value, onChange }) => (
	<TextField
		value={value}
		onChange={onChange}
		type='email'
		name='email'
		label='Email'
		required
		fullWidth
		InputLabelProps={{ sx: { color: 'white' } }}
	/>
);

export default EmailField;
