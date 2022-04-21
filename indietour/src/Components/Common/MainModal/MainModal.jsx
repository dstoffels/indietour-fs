import { Dialog } from '@mui/material';
import React from 'react';
import DeleteModal from '../DeleteModal/DeleteModal.jsx';
import CloseModalBtn from './CloseModalBtn/CloseModalBtn.jsx';
import useModal from './useModal.js';

const MainModal = props => {
	const { modals, mainModal, closeMainModal } = useModal();

	return (
		<>
			<DeleteModal />
			<Dialog
				fullWidth
				PaperProps={{
					className: 'm-1',
					sx: {
						width: '100%',
					},
				}}
				open={Boolean(mainModal)}>
				<CloseModalBtn />
				{modals[mainModal]}
			</Dialog>
		</>
	);
};

export default MainModal;
