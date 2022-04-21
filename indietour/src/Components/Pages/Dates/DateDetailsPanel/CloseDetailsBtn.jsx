import { Clear } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';
import useDates from '../useDates.js';

const CloseDetailsBtn = () => {
	const { unsavedChanges, deselectTourDate } = useDates();
	const { openDeleteModal, modalKeys } = useModal();

	const handleClick = () =>
		unsavedChanges ? openDeleteModal(modalKeys.discardDateChanges) : deselectTourDate();

	return (
		<IconButton color='warning' size='large' onClick={handleClick}>
			<Clear />
		</IconButton>
	);
};

export default CloseDetailsBtn;
