import Panel from 'Components/Common/Panel/Panel.jsx';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import React from 'react';
import TourInfo from './TourInfo/TourInfo.jsx';
import Tours from './Tours/Tours.jsx';

const TourPanel = props => {
	const { tours } = useTours();

	return (
		<Panel>
			<TourInfo />
			<Tours tours={tours} />
		</Panel>
	);
};

export default TourPanel;
