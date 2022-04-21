import { Delete } from '@mui/icons-material';
import { Button, Paper, Stack, Typography } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';
import DeleteContactBtn from './DeleteContactBtn.jsx';

const DeleteContactModal = props => {
	return (
		<Paper className='p-3'>
			<h5>Remove event</h5>
			<Stack spacing={3} marginTop={3}>
				<Typography color='error' variant='subtitle1'>
					Are you sure you want to delete this contact?
				</Typography>
				<DeleteContactBtn />
			</Stack>
		</Paper>
	);
};

export default DeleteContactModal;
