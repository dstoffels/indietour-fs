import { InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FormControl } from '@mui/material';
import './Selector.css';

const Selector = ({
	id,
	options,
	nameKey,
	onChange,
	defaultSelection,
	label = '',
	variant = 'standard',
}) => {
	const [selected, setSelected] = useState(defaultSelection[nameKey]);

	const handleChange = e => {
		setSelected(e.target.value);
		const i = options.findIndex(op => op[nameKey] === e.target.value);
		onChange(options[i]);
	};

	useEffect(() => {
		setSelected(defaultSelection[nameKey]);
	}, [defaultSelection]);

	const menuItems = [...options]
		.sort((a, b) => {
			if (a[nameKey] < b[nameKey]) return -1;
			if (a[nameKey] > b[nameKey]) return 1;
			return 0;
		})
		.map(option => (
			<MenuItem key={option[nameKey]} value={option[nameKey]}>
				{option[nameKey]}
			</MenuItem>
		));

	if (defaultSelection) {
		return (
			<FormControl fullWidth className='selector'>
				<InputLabel sx={{ color: 'primary.main' }}>{label}</InputLabel>
				<Select
					size='small'
					value={selected}
					onChange={handleChange}
					variant={variant}
					label={label}
					id={id}>
					{menuItems}
				</Select>
			</FormControl>
		);
	}
	return null;
};

export default Selector;
