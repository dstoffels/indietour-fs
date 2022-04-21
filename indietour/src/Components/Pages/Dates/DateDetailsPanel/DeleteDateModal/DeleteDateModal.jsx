import { Paper, Stack, Typography } from '@mui/material';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import React from 'react';
import useDates from '../../useDates.js';
import DeleteDateBtn from './DeleteDateBtn.jsx';

const DeleteDateModal = () => {
	const { activeDate } = useDates();
	const { activeTour } = useTours();

	return (
		<Paper className='p-3'>
			<h5>{`Removing ${activeDate.title} from ${activeTour.name}`}</h5>
			<Stack spacing={3} marginTop={3}>
				<Typography color='error' variant='subtitle1'>
					{`Are you ABSOLUTELY certain you want to remove this date from the tour? This action cannot be undone.`}
				</Typography>
				<DeleteDateBtn />
			</Stack>
		</Paper>
	);
};

export default DeleteDateModal;
