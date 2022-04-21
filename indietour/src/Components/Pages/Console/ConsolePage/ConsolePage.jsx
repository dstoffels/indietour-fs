import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';
import Page from 'Components/Common/Page/Page.jsx';
import { CONSOLE } from 'constants/routes.js';
import React from 'react';
import BandPanel from '../Bands/BandPanel/BandPanel.jsx';
import useBands from '../Bands/useBands.js';
import TourPanel from '../Tours/TourPanel/TourPanel.jsx';
import './Console.css';

const ConsolePage = props => {
	const { bands } = useBands();
	return (
		<Page centered route={CONSOLE}>
			{Boolean(bands.length) && <TourPanel />}
			<BandPanel />
		</Page>
	);
};

export default withAuthentication(ConsolePage);
