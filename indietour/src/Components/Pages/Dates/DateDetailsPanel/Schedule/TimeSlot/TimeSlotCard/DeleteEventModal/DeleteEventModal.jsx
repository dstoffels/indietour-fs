import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import DeleteEventBtn from './DeleteEventBtn.jsx';

const DeleteEventModal = props => {
	return (
		<Paper className='p-3'>
			<h5>Remove event</h5>
			<Stack spacing={3} marginTop={3}>
				<Typography color='error' variant='subtitle1'>
					Are you sure you want to remove this event?
				</Typography>
				<DeleteEventBtn />
			</Stack>
		</Paper>
	);
};

export default DeleteEventModal;
