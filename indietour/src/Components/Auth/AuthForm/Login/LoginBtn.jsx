import { Button } from '@mui/material';
import { LOGIN_FORM_ID } from 'Components/Auth/constants.js';
import React from 'react';

const LoginBtn = () => (
	<Button form={LOGIN_FORM_ID} type='submit' size='large' variant='contained'>
		LOG IN
	</Button>
);

export default LoginBtn;
