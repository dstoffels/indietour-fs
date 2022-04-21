import { Paper, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import MembersForm from '../MembersForm/MembersForm.jsx';

const initialState = { name: '', members: [] };
const BandForm = ({ title, id, onSubmit, submitBtn, values = initialState }) => {
	// STATE
	const [form, setForm] = useState(values);
	const [error, setError] = useState('');

	const handleName = e => setForm({ ...form, name: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();

		// Remove empty member fields before api call
		const members = [...form.members];
		const lastIndex = members.length - 1;
		!members[lastIndex]?.email.includes('@') && members.pop();
		onSubmit({ ...form, members });
		// TODO: needs error handling
	};

	return (
		<Paper className='p-3'>
			<h5>{title}</h5>
			<form id={id} onSubmit={handleSubmit}>
				<Stack spacing={2} marginTop={2}>
					<TextField
						autoFocus
						required
						label='Band/Artist Name'
						value={form.name}
						onChange={handleName}
						InputLabelProps={{ sx: { color: 'white' } }}
						InputProps={{ sx: { color: 'white' } }}
					/>
					<i className='text-danger'>{error}</i>
				</Stack>
			</form>

			<MembersForm bandForm={form} setBandForm={setForm} />
			{submitBtn}
		</Paper>
	);
};

export default BandForm;
