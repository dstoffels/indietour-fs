import { Edit } from '@mui/icons-material';
import { Button } from '@mui/material';
import withAdmin from 'Components/Auth/Authorization/withAdmin.jsx';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';

const EditTourModalBtn = props => {
	const { modalKeys, openMainModal } = useModal();
	const handleClick = () => openMainModal(modalKeys.editTour);

	return (
		<Button onClick={handleClick} color='warning' startIcon={<Edit />}>
			Edit
		</Button>
	);
};

export default withAdmin(EditTourModalBtn);
