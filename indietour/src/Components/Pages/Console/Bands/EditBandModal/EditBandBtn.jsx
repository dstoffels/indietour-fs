import { Button } from '@mui/material';
import React from 'react';
import { EDIT_BAND_FORM_ID } from './EditBandModal.jsx';

const EditBandBtn = props => {
	return (
		<Button form={EDIT_BAND_FORM_ID} type='submit' fullWidth color='success' variant='contained'>
			SAVE CHANGES
		</Button>
	);
};

export default EditBandBtn;
