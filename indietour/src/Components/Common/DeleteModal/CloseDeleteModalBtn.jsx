import React from 'react';
import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import useModal from '../MainModal/useModal.js';

const CloseDeleteModalBtn = props => {
	const { closeDeleteModal } = useModal();

	const handleClick = () => closeDeleteModal();

	return (
		<div className='close-modal-btn'>
			<Button onClick={handleClick} color='warning' className=' py-3'>
				<Close fontSize='medium' />
			</Button>
		</div>
	);
};

export default CloseDeleteModalBtn;
