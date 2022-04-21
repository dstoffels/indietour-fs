import { Divider } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel';
import React from 'react';
import NewTourModalBtn from '../../NewTourModal/NewTourModalBtn';
import TourCard from './TourCard';

const Tours = ({ tours }) => {
	if (tours.length) {
		const tourCards = tours.map((tour, i, tours) => (
			<div key={tour.name}>
				<TourCard tour={tour} />
				{i < tours.length - 1 && <Divider />}
			</div>
		));

		return (
			<Panel.Section title='Tours' topActions={<NewTourModalBtn />}>
				{tourCards}
			</Panel.Section>
		);
	}
	return null;
};

export default Tours;
