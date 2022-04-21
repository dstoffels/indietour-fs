import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';
import Selector from 'Components/Common/Selector/Selector.jsx';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import React from 'react';
import useBands from '../../Bands/useBands.js';

const TourSelector = props => {
	const { activeTour, tours, selectTour } = useTours();
	const { activeMember } = useBands();

	const handleChange = tour => selectTour(tour);

	const gate = Boolean(tours.find(t => t.name === activeTour?.name));

	if (activeTour && tours.length && gate) {
		return (
			<Selector
				onChange={handleChange}
				id='tour-selector'
				options={tours}
				nameKey='name'
				defaultSelection={activeTour}
				label={activeMember.bandName}
				variant='outlined'
			/>
		);
	}
	return null;
};

export default withAuthentication(TourSelector);
