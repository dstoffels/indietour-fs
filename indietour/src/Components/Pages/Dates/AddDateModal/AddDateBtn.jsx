import SubmitBtn from 'Components/Common/SubmitBtn/SubmitBtn.jsx';
import React from 'react';
import { ADD_DATE_FORM_ID } from './AddDateModal.jsx';

const AddDateBtn = props => {
	return <SubmitBtn text='ADD DATE' formId={ADD_DATE_FORM_ID} />;
};

export default AddDateBtn;
