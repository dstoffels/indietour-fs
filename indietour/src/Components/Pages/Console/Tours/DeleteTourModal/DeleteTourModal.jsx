import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import useTours from '../useTours.js';
import DeleteTourBtn from './DeleteTourBtn.jsx';

const DeleteTourModal = props => {
	const { activeTour } = useTours();

	return (
		<Paper className='p-3'>
			<Stack spacing={2}>
				<Typography variant='h6'>DELETE {activeTour.name}</Typography>
				<Typography variant='body2'>
					{`Are you ABSOLUTELY certain you want to delete ${activeTour.name}? This action cannot be undone.`}{' '}
				</Typography>
				<DeleteTourBtn />
			</Stack>
		</Paper>
	);
};

export default DeleteTourModal;
