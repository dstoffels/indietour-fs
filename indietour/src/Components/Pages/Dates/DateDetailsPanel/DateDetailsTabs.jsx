import React, { useState } from 'react';
import { Box, Divider, Slide, Tab, Tabs } from '@mui/material';

export const DateTabPanel = ({ value, i, children, slideDirection = 'left' }) => {
	const hidden = value !== i;
	return (
		<Slide direction={slideDirection} in={!hidden}>
			<div role='tabpanel' hidden={hidden}>
				{children}
			</div>
		</Slide>
	);
};

const DateDetailsTabs = ({ value, onChange }) => {
	const handleChange = (e, newVal) => onChange(newVal);
	return (
		<div>
			<Tabs variant='fullWidth' value={value} onChange={handleChange}>
				<Tab label='Details' />
				<Tab label='Schedule' />
				<Tab label='Contacts' />
			</Tabs>
			<Divider sx={{ marginX: '-50px', marginBottom: 1 }} />
		</div>
	);
};

export default DateDetailsTabs;
