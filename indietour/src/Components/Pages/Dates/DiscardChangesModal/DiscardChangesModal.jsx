import { Cancel } from '@mui/icons-material';
import { Button, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import SaveDateBtn from '../DateDetailsPanel/SaveDateBtn.jsx';
import useDates from '../useDates.js';
import DiscardDateChangesBtn from './DiscardDateChangesBtn.jsx';

const DiscardChangesModal = props => {
	const { activeDate } = useDates();

	return (
		<Paper className='p-3'>
			<Stack spacing={2}>
				<Typography variant='h5'>Unsaved changes</Typography>
				<Typography variant='body1'>{`You have unsaved changes to ${activeDate.date}. Do you want to save or discard them?`}</Typography>
				<Stack spacing={2} justifyContent='end' direction='row'>
					<SaveDateBtn />
					<DiscardDateChangesBtn />
				</Stack>
			</Stack>
		</Paper>
	);
};

export default DiscardChangesModal;
