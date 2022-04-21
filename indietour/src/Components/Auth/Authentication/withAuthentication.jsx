import React from 'react';

import Authenticate from './Authenticate.jsx';

const withAuthentication = Component => props =>
	(
		<Authenticate>
			<Component {...props} />
		</Authenticate>
	);

export default withAuthentication;
