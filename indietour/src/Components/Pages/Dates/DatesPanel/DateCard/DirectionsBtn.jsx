import { LocationOn } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';

const DirectionsBtn = ({ location }) => {
	const handleClick = e => {
		e.stopPropagation();
	};

	if (location) {
		return (
			<Button
				href={`http://www.google.com/maps?saddr=My+Location&daddr=${location}`}
				target='_blank'
				color='primary'
				onClick={handleClick}>
				<LocationOn fontSize='large' />
			</Button>
		);
	}
	return null;
};

export default DirectionsBtn;
