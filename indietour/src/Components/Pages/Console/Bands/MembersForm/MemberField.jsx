import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import AdminSwitch from './AdminSwitch.jsx';
import RemoveMemberBtn from './RemoveMemberBtn.jsx';

const MemberField = ({ i, member, onChange, members, setMembers }) => {
	const [role, setRole] = useState(member.role);

	const handleChange = e => onChange(i, e.target.value, role);

	useEffect(() => {
		onChange(i, member.email, role);
	}, [role]);

	return (
		<div className='d-flex'>
			<FormControl fullWidth>
				<InputLabel sx={{ color: 'white' }} htmlFor={`member-email-input-${i}`}>
					Member Email
				</InputLabel>
				<OutlinedInput
					size='small'
					autoFocus
					id={`member-email-input-${i}`}
					label='Member Email'
					type='email'
					required
					value={member.email}
					onChange={handleChange}
					endAdornment={<AdminSwitch role={role} setRole={setRole} />}
				/>
			</FormControl>
			<RemoveMemberBtn i={i} members={members} setMembers={setMembers} />
		</div>
	);
};

export default MemberField;
