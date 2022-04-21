import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { placesPath } from 'utils/restPaths.js';

const LocationField = ({ value, name = 'location', label = 'Location', onChange, size }) => {
	const [open, setOpen] = useState(false);
	const [options, setOptions] = useState([]);

	const queryPlaces = async () => {
		if (value) {
			// options.length ? setOpen(true) : setOpen(false);
			const response = await axios.get(placesPath(value));
			const locations = response.data.results.map(
				({ name, formatted_address, business_status }) =>
					`${business_status ? name + ': ' : ''}${formatted_address}`,
			);
			setOptions(locations);
		} else {
			setOpen(false);
			setOptions([]);
		}
	};

	const handleClose = e => {
		onChange(e);
		setOpen(false);
	};

	useEffect(() => {
		queryPlaces();
	}, [value]);

	return (
		<Autocomplete
			options={options}
			open={open}
			onFocus={() => {
				setOpen(Boolean(options.length));
			}}
			onBlur={handleClose}
			autoHighlight
			autoSelect
			autoComplete
			blurOnSelect
			loading
			value={value}
			onSelect={onChange}
			filterOptions={options => options}
			freeSolo
			ListboxProps={{ onClick: () => setOpen(false) }}
			renderInput={params => (
				<TextField
					{...params}
					label={label}
					size={size}
					name={name}
					value={value}
					onChange={onChange}
				/>
			)}
		/>
	);
};

export default LocationField;
