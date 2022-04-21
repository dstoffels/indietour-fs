import { Button, Dialog, Divider, Paper, Stack, Typography } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';
import useBands from '../useBands.js';
import DeleteBandBtn from './DeleteBandBtn.jsx';

const DeleteBandModal = props => {
	const { activeMember } = useBands();

	const { closeDeleteModal } = useModal();

	const handleClose = () => closeDeleteModal();

	return (
		<Paper className='p-3'>
			<h5>{`Deleting ${activeMember?.bandName}`}</h5>
			<Stack spacing={3} marginTop={3}>
				<Typography
					color='error'
					variant='subtitle1'>{`Are you ABSOLUTELY certain you want to delete the band '${activeMember?.bandName}'? This action cannot be undone.`}</Typography>
				<DeleteBandBtn bandName={activeMember?.bandName} />
			</Stack>
		</Paper>
	);
};

export default DeleteBandModal;
