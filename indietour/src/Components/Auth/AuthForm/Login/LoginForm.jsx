import { Stack } from '@mui/material';
import { LOGIN_FORM_ID } from 'Components/Auth/constants.js';
import useForm from 'hooks/useForm.js';
import React, { useState } from 'react';
import { emailLogin } from 'fb/firebase';
import EmailField from '../EmailField/EmailField.jsx';
import PasswordField from '../PasswordField/PasswordField.jsx';

const LoginForm = ({ closeMenu }) => {
	// STATE
	const initialState = { email: '', password: '' };
	const { form, handleChange, handleSubmit } = useForm(initialState, login);
	const [error, setError] = useState('');

	async function login() {
		try {
			await emailLogin(form);
			closeMenu();
		} catch (e) {
			setError(e.code);
		}
	}

	const stopProp = e => e.stopPropagation();

	return (
		<form id={LOGIN_FORM_ID} onSubmit={handleSubmit} onClick={stopProp} onKeyDown={stopProp}>
			<Stack spacing={2} marginTop={2}>
				<EmailField value={form.email} onChange={handleChange} />
				<PasswordField value={form.password} onChange={handleChange} label='Password' />
				<i className='text-danger'>{error}</i>
			</Stack>
		</form>
	);
};

export default LoginForm;
