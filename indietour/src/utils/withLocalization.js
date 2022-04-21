import React from 'react';
import { LocalizationProvider } from '@mui/lab';
import Adapter from '@mui/lab/AdapterDateFns';

const withLocalization = Component => props => {
	return (
		<LocalizationProvider dateAdapter={Adapter}>
			<Component {...props} />
		</LocalizationProvider>
	);
};

export default withLocalization;
