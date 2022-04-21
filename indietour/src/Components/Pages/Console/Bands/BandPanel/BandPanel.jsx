import Panel from 'Components/Common/Panel/Panel.jsx';
import React from 'react';
import BandInfo from './BandInfo/BandInfo.jsx';
import Bands from './Bands/Bands.jsx';

const BandPanel = props => {
	return (
		<Panel>
			<BandInfo />
			<Bands />
		</Panel>
	);
};

export default BandPanel;
