import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';
import useTours from '../useTours.js';

const DeleteTourModalBtn = props => {
	const { modalKeys, openDeleteModal } = useModal();
	const { activeTour } = useTours();

	const handleClick = () => openDeleteModal(modalKeys.delTour);

	if (!activeTour.isPerpetual) {
		return (
			<Button onClick={handleClick} color='error' startIcon={<Delete />}>
				DELETE TOUR
			</Button>
		);
	}
	return null;
};

export default DeleteTourModalBtn;
