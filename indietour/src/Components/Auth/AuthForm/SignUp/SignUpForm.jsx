import { Stack, TextField } from '@mui/material';
import { SIGNUP_FORM_ID } from 'Components/Auth/constants.js';
import { createEmailUser } from 'fb/firebase.js';
import useForm from 'hooks/useForm.js';
import React, { useEffect, useState } from 'react';
import EmailField from '../EmailField/EmailField.jsx';
import PasswordField from '../PasswordField/PasswordField.jsx';

const SignUpForm = ({ closeMenu }) => {
	// STATE
	const [error, setError] = useState('');
	const initialState = { email: '', displayName: '', password: '', confirmPassword: '' };
	const { form, handleChange, handleSubmit } = useForm(initialState, onSubmit);

	useEffect(() => {
		form.password !== form.confirmPassword ? setError('Passwords do not match') : setError('');
	}, [form.password, form.confirmPassword]);

	async function onSubmit() {
		try {
			await createEmailUser(form);
			Boolean(closeMenu) && closeMenu();
		} catch (e) {
			setError(e.code);
		}
	}

	const stopProp = e => e.stopPropagation();

	return (
		<form id={SIGNUP_FORM_ID} onSubmit={handleSubmit} onClick={stopProp} onKeyDown={stopProp}>
			<Stack spacing={2}>
				<EmailField value={form?.email} onChange={handleChange} />
				<TextField
					label='Username'
					name='displayName'
					value={form.displayName}
					onChange={handleChange}
					InputLabelProps={{ sx: { color: 'white' } }}
				/>
				<PasswordField value={form.password} onChange={handleChange} label='Password' />
				<PasswordField
					value={form.confirmPassword}
					onChange={handleChange}
					label='Confirm password'
					name='confirmPassword'
				/>
				<i className='text-danger'>{error}</i>
			</Stack>
		</form>
	);
};

export default SignUpForm;
