import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONSOLE } from 'constants/routes.js';
import { auth } from 'fb/firebase.js';
import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';
import Page from 'Components/Common/Page/Page.jsx';
import { Typography } from '@mui/material';

const VerifyEmail = props => {
	const navigate = useNavigate();

	useEffect(() => {
		const checkForVerify = setInterval(async () => {
			const { currentUser } = auth;
			currentUser.reload();
			currentUser.emailVerified && navigate(CONSOLE);
		}, 2000);
		return () => clearInterval(checkForVerify);
	}, []);

	return (
		<Page>
			<div className='centered' style={{ textAlign: 'center' }}>
				<Typography color='primary' variant='h5'>
					Awaiting email verification
				</Typography>
				<Typography>
					Please check your email, you will automatically be redirected once verified.
				</Typography>
			</div>
		</Page>
	);
};
// TODO: make a card to display awaiting email verification and resend button.

export default withAuthentication(VerifyEmail);
