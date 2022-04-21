import { Paper } from '@mui/material';
import React from 'react';
import CreateTourBtn from '../TourForm/CreateTourBtn.jsx';
import TourForm from '../TourForm/TourForm.jsx';
import useTours from '../useTours.js';

export const NEW_TOUR_FORM_ID = 'new-tour-form';

const NewTourModal = props => {
	const { createTour } = useTours();

	const handleSubmit = form => {
		createTour(form);
	};

	return (
		<Paper elevation={0}>
			<TourForm
				title='Create new tour'
				id={NEW_TOUR_FORM_ID}
				onSubmit={handleSubmit}
				submitBtn={<CreateTourBtn />}
			/>
		</Paper>
	);
};

export default NewTourModal;
