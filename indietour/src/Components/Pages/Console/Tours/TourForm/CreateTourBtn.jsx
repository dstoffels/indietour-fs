import { Button } from '@mui/material';
import SubmitBtn from 'Components/Common/SubmitBtn/SubmitBtn.jsx';
import React from 'react';
import { NEW_TOUR_FORM_ID } from '../NewTourModal/NewTourModal.jsx';

const CreateTourBtn = props => {
	return <SubmitBtn formId={NEW_TOUR_FORM_ID} text='CREATE NEW TOUR' />;
};

export default CreateTourBtn;
