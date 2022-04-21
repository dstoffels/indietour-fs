import { Add } from '@mui/icons-material';
import { Button, Fab, Tooltip } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';

const NewBandModalBtn = ({ text }) => {
	const { openMainModal, modalKeys } = useModal();
	const handleClick = () => openMainModal(modalKeys.newBand);

	return (
		<Tooltip title='Create new band'>
			<Button color='primary' variant='text' onClick={handleClick} startIcon={<Add />}>
				CREATE NEW BAND
			</Button>
		</Tooltip>
	);
};

export default NewBandModalBtn;
