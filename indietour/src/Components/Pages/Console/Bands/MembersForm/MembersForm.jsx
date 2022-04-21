import React, { useEffect, useState } from 'react';
import { Button, Divider, Stack } from '@mui/material';
import MemberField from './MemberField.jsx';
import { MEMBER } from 'constants/roles.js';

const memberTemplate = { email: '', role: MEMBER, displayName: '' };

const MembersForm = ({ bandForm, setBandForm }) => {
	const [members, setMembers] = useState([...bandForm.members]);

	const handleSubmit = e => {
		e.preventDefault();
		const newMembers = [...members, memberTemplate];
		setMembers(newMembers);
	};

	const handleChange = (i, email, role) => {
		const newMembers = [...members];
		newMembers[i] = { email, role };
		setMembers(newMembers);
	};

	useEffect(() => {
		setBandForm({ ...bandForm, members });
	}, [members]);

	const memberFields = members.map((member, i) => (
		<MemberField
			key={i}
			i={i}
			member={member}
			onChange={handleChange}
			members={[...members]}
			setMembers={setMembers}
		/>
	));

	return (
		<form onSubmit={handleSubmit}>
			<Stack spacing={2} marginBottom={3}>
				{memberFields}
				<Button type='submit' size='' variant='text' fullWidth>
					{members.length ? 'Invite another member' : 'Invite Members'}
				</Button>
			</Stack>
		</form>
	);
};

export default MembersForm;
