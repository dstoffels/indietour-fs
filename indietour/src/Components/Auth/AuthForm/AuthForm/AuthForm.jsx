import { Button, Divider, MenuItem, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import SignUpForm from '../SignUp/SignUpForm.jsx';
import LoginBtn from '../Login/LoginBtn.jsx';
import SignUpBtn from '../SignUp/SignUpBtn.jsx';
import LoginForm from '../Login/LoginForm.jsx';

const AuthForm = ({ closeMenu }) => {
	const [signUp, setSignUp] = useState(false);

	const handleSignUp = e => {
		e.stopPropagation();
		setSignUp(!signUp);
	};

	return (
		<div
			onClick={e => {
				e.stopPropagation();
			}}
			className='p-3 w-100'>
			<h5>{signUp ? 'Sign up for a new account' : 'Log in to your account'}</h5>
			{signUp ? <SignUpForm closeMenu={closeMenu} /> : <LoginForm closeMenu={closeMenu} />}
			<Stack direction='row' spacing={2} marginTop={2} flex={1} justifyContent='space-between	'>
				<Button onClick={handleSignUp} size='small'>
					{signUp ? 'LOGIN' : 'CREATE NEW ACCOUNT'}
				</Button>
				{signUp ? <SignUpBtn /> : <LoginBtn />}
			</Stack>
		</div>
	);
};

export default AuthForm;
