import { Button } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import useDates from 'Components/Pages/Dates/useDates.js';
import React from 'react';

const DeleteContactBtn = () => {
	const { closeDeleteModal } = useModal();
	const { contacts, activeContact, activeDate, selectContact, editActiveDate } = useDates();

	const handleClick = () => {
		const updatedContacts = [...contacts];
		const i = updatedContacts.findIndex(({ key }) => key === activeContact.key);
		updatedContacts.splice(i, 1);
		const updatedDate = { ...activeDate, contacts: updatedContacts };
		editActiveDate(updatedDate);
		selectContact(null);
		closeDeleteModal();
	};

	return (
		<Button fullWidth color='error' variant='contained' onClick={handleClick}>
			YES, DELETE CONTACT
		</Button>
	);
};

export default DeleteContactBtn;
