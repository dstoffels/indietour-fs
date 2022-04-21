import React from 'react';
import DeleteTourModalBtn from '../DeleteTourModal/DeleteTourModalBtn.jsx';
import TourForm from '../TourForm/TourForm.jsx';
import ArchiveTourBtn from '../TourPanel/Tours/ArchiveTourBtn.jsx';
import useTours from '../useTours.js';
import UpdateTourBtn from './UpdateTourBtn.jsx';

export const EDIT_TOUR_FORM_ID = 'edit-tour-form';

const EditTourModal = props => {
	const { activeTour, updateTour } = useTours();

	const handleSubmit = form => updateTour(form);

	const { name, notes, dates } = activeTour;

	const actions = [<ArchiveTourBtn key='archive' withText />, <DeleteTourModalBtn key='delete' />];

	return (
		<TourForm
			title={`Editing ${name}`}
			onSubmit={handleSubmit}
			id={EDIT_TOUR_FORM_ID}
			values={activeTour}
			submitBtn={<UpdateTourBtn />}
			actions={actions}
		/>
	);
};

export default EditTourModal;
