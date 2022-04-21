import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';

const DeleteBandModalBtn = props => {
	const { openDeleteModal, modalKeys } = useModal();
	const handleClick = () => openDeleteModal(modalKeys.delBand);
	return (
		<Button color='error' onClick={handleClick} variant='text' startIcon={<Delete />}>
			DELETE
		</Button>
	);
};

export default DeleteBandModalBtn;
