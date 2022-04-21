import React from 'react';
import useDates from '../../useDates.js';
import AddContactBtn from './AddContactBtn.jsx';
import ContactCard from './ContactCard.jsx';

const ContactsList = ({}) => {
	const { contacts } = useDates();

	const contactCards = contacts.map((contact, i, a) => (
		<ContactCard key={contact.key} contact={contact} i={i} isLast={i === a.length - 1} />
	));

	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'end' }}>
				<AddContactBtn />
			</div>
			{contactCards}
		</>
	);
};

export default ContactsList;
