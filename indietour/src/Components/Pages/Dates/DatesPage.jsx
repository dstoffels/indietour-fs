import Page from 'Components/Common/Page/Page.jsx';
import { CONSOLE } from 'constants/routes.js';
import useWindow from 'hooks/useWindow.js';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';
import useTours from '../Console/Tours/useTours.js';
import DateDetailsPanel from './DateDetailsPanel/DateDetailsPanel.jsx';
import DatesPanel from './DatesPanel/DatesPanel.jsx';
import useDates from './useDates.js';

const DatesPage = props => {
	const navigate = useNavigate();
	const { activeTour } = useTours();
	const { activeDate } = useDates();
	const { isMobile } = useWindow();

	useEffect(() => {
		!activeTour && navigate(CONSOLE);
	}, []);

	return isMobile ? (
		activeDate ? (
			<Page>
				<DateDetailsPanel />
			</Page>
		) : (
			<Page>
				<DatesPanel />
			</Page>
		)
	) : (
		<Page>
			<DatesPanel />
			<DateDetailsPanel />
		</Page>
	);
};

export default withAuthentication(DatesPage);
