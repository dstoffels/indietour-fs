import { Cancel } from '@mui/icons-material';
import { Button } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';
import useDates from '../useDates.js';

const DiscardDateChangesBtn = props => {
	const { revertActiveDate, selectEvent } = useDates();
	const { closeDeleteModal } = useModal();

	const handleClick = () => {
		revertActiveDate();
		closeDeleteModal();
	};
	return (
		<Button color='warning' startIcon={<Cancel />} onClick={handleClick}>
			DISCARD
		</Button>
	);
};

export default DiscardDateChangesBtn;
