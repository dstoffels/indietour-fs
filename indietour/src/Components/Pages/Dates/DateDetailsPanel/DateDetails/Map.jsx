import React from 'react';
import { GOOGLE_API_KEY } from 'utils/apiKeys.js';

const Map = ({ location }) => {
	if (location) {
		return (
			<iframe
				title='gmap'
				style={{ width: '100%', height: '250px' }}
				loading='lazy'
				src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}
        &q=${location}`}></iframe>
		);
	}
	return null;
};

export default Map;
