import Page from 'Components/Common/Page/Page.jsx';
import Panel from 'Components/Common/Panel/Panel.jsx';
import React, { useEffect } from 'react';
import useForm from 'hooks/useForm';
import { Button, Stack, TextField, Typography } from '@mui/material';
import useUser from 'hooks/useUser.js';
import { setPassword } from 'fb/firebase.js';
import { useNavigate } from 'react-router-dom';
import { CONSOLE } from 'constants/routes.js';

const initialState = {
	oldPW: '',
	password: '',
	confirmPassword: '',
};

const PasswordPage = props => {
	const navigate = useNavigate();
	const { user, refreshUser, token } = useUser();

	initialState.oldPW = user?.hasValidPW ? '' : 'password';
	const { form, handleChange, handleSubmit } = useForm(initialState, updatePassword);

	const { oldPW, password, confirmPassword } = form;

	const validPW = Boolean(password) && Boolean(confirmPassword) && password === confirmPassword;

	async function updatePassword() {
		await setPassword(token, password);
		await refreshUser();
	}

	useEffect(() => {
		user.hasValidPW && navigate(CONSOLE);
	}, [user]);

	return (
		<Page centered>
			<Panel centered title='Reset Password'>
				<Panel.Section>
					<form onSubmit={handleSubmit}>
						<Stack spacing={2}>
							{user?.hasValidPW ? (
								<TextField
									type='password'
									label='Old Password'
									name='oldPW'
									value={oldPW}
									onChange={handleChange}
								/>
							) : (
								<Typography fontStyle='italic' color='warning.main'>
									Your account was generated by another user when they added you to their band. Your
									password must be set before you can access your account.
								</Typography>
							)}
							<TextField
								autoComplete={password}
								type='password'
								label='New Password'
								name='password'
								value={password}
								onChange={handleChange}
							/>
							<TextField
								autoComplete={confirmPassword}
								type='password'
								label='Confirm New Password'
								name='confirmPassword'
								value={confirmPassword}
								onChange={handleChange}
							/>
							<Stack direction='row' spacing={2} justifyContent='flex-end'>
								{user?.hasValidPW && <Button color='warning'>CANCEL</Button>}
								<Button disabled={!validPW} type='submit'>
									UPDATE PASSWORD
								</Button>
							</Stack>
						</Stack>
					</form>
				</Panel.Section>
			</Panel>
		</Page>
	);
};

export default PasswordPage;
