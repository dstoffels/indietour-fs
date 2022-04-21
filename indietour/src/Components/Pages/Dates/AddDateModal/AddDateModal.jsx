import useTours from 'Components/Pages/Console/Tours/useTours.js';
import React, { useState } from 'react';
import AddDateBtn from './AddDateBtn.jsx';
import AddDateForm from './AddDateForm.jsx';

export const ADD_DATE_FORM_ID = 'add-date-form';

const AddDateModal = () => {
	const { activeTour, activeTourDates, updateTour } = useTours();

	const handleSubmit = newTourDate => {
		const dates = [...activeTourDates, newTourDate].sort(
			(a, b) => Date.parse(a.date) - Date.parse(b.date),
		);

		updateTour({ ...activeTour, dates });
	};

	return (
		<AddDateForm
			tourName={activeTour.name}
			tourDates={activeTourDates}
			submitBtn={<AddDateBtn />}
			onSubmit={handleSubmit}
		/>
	);
};

export default AddDateModal;
