import { CardContent, Slide, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import useDates from '../../useDates.js';
import CancelEditDateBtn from '../Schedule/TimeSlot/TimeSlotCard/CancelEditEventBtn.jsx';
import DeleteContactModalBtn from './DeleteContactModal/DeleteContactModalBtn.jsx';

export const Contact = () => {
	return {
		title: '',
		name: '',
		phone: '',
		email: '',
		notes: '',
		key: Math.random(),
	};
};

const ContactForm = ({ contact, i }) => {
	const { activeDate, editActiveDate, activeContact } = useDates();

	const handleChange = e => {
		const contacts = [...activeDate.contacts];
		contacts[i] = { ...contacts[i], [e.target.name]: e.target.value };
		editActiveDate({ ...activeDate, contacts });
	};

	const { title, name, phone, email, notes } = contact;

	return (
		<Slide direction='down' in={activeContact.key === contact.key}>
			<CardContent className='p-2 flex-between w-100'>
				<Stack className='w-100' spacing={1} position='relative'>
					<CancelEditDateBtn />

					<Typography color='primary' variant='h6' paddingBottom={1}>
						Editing contact
					</Typography>

					<TextField
						fullWidth
						required
						label='Name'
						size='small'
						name='name'
						value={name}
						onChange={handleChange}
					/>

					<TextField
						fullWidth
						required
						label='Title'
						size='small'
						name='title'
						value={title}
						onChange={handleChange}
					/>

					<TextField
						fullWidth
						label='Phone'
						size='small'
						name='phone'
						value={phone}
						onChange={handleChange}
					/>

					<TextField
						fullWidth
						type='email'
						label='Email'
						size='small'
						name='email'
						value={email}
						onChange={handleChange}
					/>
					{/* 
					<TextField
						fullWidth
						multiline
						label='Notes'
						size='small'
						name='notes'
						value={notes}
						onChange={handleChange}
					/> */}
					<DeleteContactModalBtn />
				</Stack>
			</CardContent>
		</Slide>
	);
};

export default ContactForm;
