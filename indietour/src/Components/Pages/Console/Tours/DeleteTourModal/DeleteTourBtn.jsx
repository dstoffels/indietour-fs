import { Button } from '@mui/material';
import React from 'react';
import useTours from '../useTours.js';

const DeleteTourBtn = props => {
	const { activeTour, deleteTour } = useTours();

	const handleClick = () => deleteTour(activeTour.path);
	return (
		<Button fullWidth color='error' variant='contained' onClick={handleClick}>
			CONFIRM DELETE
		</Button>
	);
};

export default DeleteTourBtn;
