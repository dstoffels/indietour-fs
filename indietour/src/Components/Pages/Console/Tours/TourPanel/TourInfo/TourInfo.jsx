import { Stack, Typography } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel.jsx';
import React from 'react';
import EditTourModalBtn from '../../EditTourModal/EditTourModalBtn.jsx';
import NewTourModalBtn from '../../NewTourModal/NewTourModalBtn.jsx';
import useTours from '../../useTours.js';

const TourInfo = props => {
	const { activeTour } = useTours();

	const actions = (
		<>
			<EditTourModalBtn />
			{/* <AddDateModalBtn /> */}
		</>
	);

	if (activeTour) {
		const { name, startDate, endDate, numDates, notes } = activeTour;

		return (
			<Panel.Section title='Active Tour' bottomActions={actions}>
				<Stack spacing={1}>
					<Panel.Header>{name}</Panel.Header>

					<Panel.Field label='Start Date' show={startDate}>
						{startDate}
					</Panel.Field>

					<Panel.Field label='End Date' show={endDate}>
						{endDate}
					</Panel.Field>

					<Panel.Field label='Total Dates'>{numDates}</Panel.Field>

					<Panel.Field label='Notes' show={notes}>
						{notes}
					</Panel.Field>
				</Stack>
			</Panel.Section>
		);
	}
	return <NewTourModalBtn />;
};

export default TourInfo;
