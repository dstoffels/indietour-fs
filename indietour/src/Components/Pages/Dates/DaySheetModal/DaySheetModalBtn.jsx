import { Button } from '@mui/material';
import React from 'react';
import { Article } from '@mui/icons-material';
import useModal from 'Components/Common/MainModal/useModal.js';

const DaySheetModalBtn = props => {
	const { openMainModal, modalKeys } = useModal();

	const handleClick = () => openMainModal(modalKeys.daySheet);

	return (
		<Button startIcon={<Article />} onClick={handleClick}>
			DAY SHEET
		</Button>
	);
};

export default DaySheetModalBtn;
