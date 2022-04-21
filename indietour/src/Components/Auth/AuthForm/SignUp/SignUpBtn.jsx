import { Button } from '@mui/material';
import React from 'react';
import { SIGNUP_FORM_ID } from '../../constants.js';

const SignUpBtn = () => (
	<Button form={SIGNUP_FORM_ID} type='submit' size='large' variant='contained'>
		SIGN UP
	</Button>
);

export default SignUpBtn;
