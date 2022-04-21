import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import withAdmin from 'Components/Auth/Authorization/withAdmin.jsx';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';

const AddDateModalBtn = props => {
	const { openMainModal, modalKeys } = useModal();
	const handleClick = () => openMainModal(modalKeys.newDate);
	return (
		<Button color='primary' variant='text' onClick={handleClick} startIcon={<Add />}>
			ADD TOUR DATE
		</Button>
	);
};

export default withAdmin(AddDateModalBtn);
