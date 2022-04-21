import React from 'react';
import { Close } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import './CloseModalBtn.css';
import useModal from '../useModal.js';

const CloseModalBtn = props => {
	const { closeMainModal } = useModal();
	const handleClick = () => closeMainModal();
	return (
		<div className='close-modal-btn'>
			<Button onClick={handleClick} color='warning' className=' py-3'>
				<Close fontSize='medium' />
			</Button>
		</div>
	);
};

export default CloseModalBtn;
