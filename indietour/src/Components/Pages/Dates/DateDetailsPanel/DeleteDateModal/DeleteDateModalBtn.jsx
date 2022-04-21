import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';

const DeleteDateModalBtn = () => {
	const { modalKeys, openDeleteModal } = useModal();

	const handleClick = () => openDeleteModal(modalKeys.delDate);

	return (
		<Button onClick={handleClick} color='error' startIcon={<Delete />}>
			DELETE
		</Button>
	);
};

export default DeleteDateModalBtn;
