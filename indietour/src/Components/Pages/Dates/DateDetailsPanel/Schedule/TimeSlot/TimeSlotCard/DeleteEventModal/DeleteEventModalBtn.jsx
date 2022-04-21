import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';

const DeleteEventModalBtn = () => {
	const { openDeleteModal, modalKeys } = useModal();
	const handleClick = () => openDeleteModal(modalKeys.delEvent);
	return (
		<Button onClick={handleClick} color='error' startIcon={<Delete />}>
			REMOVE EVENT
		</Button>
	);
};

export default DeleteEventModalBtn;
