import { Typography } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel.jsx';
import ScrollWindow from 'Components/Common/ScrollWindow/ScrollWindow.jsx';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import React from 'react';
import AddDateModalBtn from '../AddDateModal/AddDateModalBtn.jsx';
import DateCard from './DateCard/DateCard.jsx';
import PastDatesToggle from './PastDatesToggle.jsx';

const DatesPanel = () => {
	const { activeTour, activeTourDates } = useTours();

	const tourDateCards = activeTourDates?.map((tourDate, i, a) => (
		<div key={tourDate.date}>
			<DateCard tourDate={tourDate} isLast={i === a.length - 1} />
		</div>
	));

	return (
		<Panel
			title={activeTour?.name}
			actions={[
				<PastDatesToggle key='past-dates-toggle' />,
				<AddDateModalBtn key='date-modal-btn' />,
			]}>
			{!activeTourDates?.length && <Typography>No tour dates yet...</Typography>}
			<ScrollWindow maxHeight='70vh'>{tourDateCards}</ScrollWindow>
		</Panel>
	);
};

export default DatesPanel;
