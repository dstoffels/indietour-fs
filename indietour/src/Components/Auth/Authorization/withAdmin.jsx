import React from 'react';
import Authorize from './Authorize.jsx';

const withAdmin = Component => props => {
	return (
		<Authorize>
			<Component {...props} />
		</Authorize>
	);
};

export default withAdmin;
