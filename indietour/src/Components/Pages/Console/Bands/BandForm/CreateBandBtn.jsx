import SubmitBtn from 'Components/Common/SubmitBtn/SubmitBtn.jsx';
import React from 'react';
import { NEW_BAND_FORM_ID } from '../NewBandModal/NewBandModal.jsx';

const CreateBandBtn = () => {
	return <SubmitBtn formId={NEW_BAND_FORM_ID} text='CREATE BAND & SEND INVITATIONS' />;
};

export default CreateBandBtn;
