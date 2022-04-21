import { Button } from '@mui/material';
import React from 'react';

const SubmitBtn = ({ formId, text }) => {
	return (
		<Button form={formId} type='submit' fullWidth color='success' variant='contained'>
			{text}
		</Button>
	);
};

export default SubmitBtn;
