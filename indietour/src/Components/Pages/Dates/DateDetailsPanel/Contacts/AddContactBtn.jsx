import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import useDates from '../../useDates.js';
import { Contact } from './ContactForm.jsx';

const AddContactBtn = () => {
	const { editing, activeDate, selectContact, editActiveDate } = useDates();

	const handleClick = () => {
		const newContact = Contact();
		const contacts = [...activeDate.contacts, newContact];
		editActiveDate({ ...activeDate, contacts });
		selectContact(newContact);
	};

	return editing ? (
		<Button onClick={handleClick} startIcon={<Add />}>
			ADD CONTACT
		</Button>
	) : null;
};

export default AddContactBtn;
