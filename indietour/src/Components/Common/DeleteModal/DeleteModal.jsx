import { Dialog } from '@mui/material';
import React from 'react';
import useModal from '../MainModal/useModal.js';
import CloseDeleteModalBtn from './CloseDeleteModalBtn.jsx';

const DeleteModal = props => {
	const { deleteModal, closeDeleteModal, modals } = useModal();

	return (
		<Dialog maxWidth='xs' fullWidth open={Boolean(deleteModal)} onClose={closeDeleteModal}>
			<CloseDeleteModalBtn />
			{modals[deleteModal]}
		</Dialog>
	);
};

export default DeleteModal;
