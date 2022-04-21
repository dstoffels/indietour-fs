import React from 'react';
import SubmitBtn from 'Components/Common/SubmitBtn/SubmitBtn.jsx';
import { EDIT_TOUR_FORM_ID } from './EditTourModal.jsx';

const UpdateTourBtn = props => {
	return <SubmitBtn formId={EDIT_TOUR_FORM_ID} text='SAVE CHANGES' />;
};

export default UpdateTourBtn;
