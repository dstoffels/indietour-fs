import Page from 'Components/Common/Page/Page.jsx';
import React from 'react';
import { BOOKING } from 'constants/routes.js';
import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';

// BOOKING FLOW:
//

const Booking = props => {
	return (
		<Page route={BOOKING}>
			<h1>Booking</h1>
		</Page>
	);
};

export default withAuthentication(Booking);
