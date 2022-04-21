import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	Divider,
	Stack,
	Tooltip,
	Typography,
} from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';
import useDates from '../../useDates.js';
import ContactForm from './ContactForm.jsx';

const ContactCard = ({ contact, i, isLast }) => {
	const { editing, unsavedChanges, activeContact, selectContact } = useDates();
	const { openDeleteModal, modalKeys } = useModal();

	const isSelected = activeContact?.key === contact.key;

	const handleClick = () => {
		editing && !isSelected && unsavedChanges
			? openDeleteModal(modalKeys.discardDateChanges)
			: selectContact(contact);
	};

	const content =
		editing && isSelected ? (
			<ContactForm contact={contact} i={i} />
		) : (
			<>
				<CardActionArea onClick={handleClick}>
					<Tooltip title={contact.notes}>
						<CardContent className='p-2 flex-start w-100'>
							<Stack className='w-100'>
								<Typography variant='subtitle2'>{contact.title}</Typography>
								<Typography variant='body2'>{contact.name}</Typography>
							</Stack>
						</CardContent>
					</Tooltip>
				</CardActionArea>
				{contact.phone && <Button>Call</Button>}
				{contact.email && <Button>Email</Button>}
			</>
		);

	return (
		<>
			<Card elevation={isSelected ? 4 : 1} className='flex-between'>
				{content}
			</Card>
			{!isLast && <Divider />}
		</>
	);
};

export default ContactCard;
