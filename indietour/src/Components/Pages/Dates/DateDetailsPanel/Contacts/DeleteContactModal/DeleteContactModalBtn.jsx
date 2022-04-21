import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';

const DeleteContactModalBtn = props => {
	const { openDeleteModal, modalKeys } = useModal();

	const handleClick = () => openDeleteModal(modalKeys.delContact);
	return (
		<Button onClick={handleClick} color='error' startIcon={<Delete />}>
			DELETE CONTACT
		</Button>
	);
};

export default DeleteContactModalBtn;
