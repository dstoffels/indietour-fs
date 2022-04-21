import React, { memo, useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import {
	Dashboard,
	DashboardOutlined,
	DateRange,
	DateRangeOutlined,
	Today,
	TodayOutlined,
} from '@mui/icons-material';

import { CONSOLE, DATES, TODAY } from 'constants/routes.js';
import { useLocation, useNavigate } from 'react-router-dom';
import useWindow from 'hooks/useWindow.js';
import useBands from 'Components/Pages/Console/Bands/useBands.js';
import useDates from 'Components/Pages/Dates/useDates.js';

const BottomNav = memo(props => {
	const navigate = useNavigate();
	const location = useLocation();
	const { isMobile } = useWindow();
	const { activeMember } = useBands();
	const { today } = useDates();

	const [value, setValue] = useState('');

	useEffect(() => {
		setValue(location.pathname);
	}, [location]);

	const handleChange = (e, newValue) => {
		setValue(newValue);
		navigate(newValue);
	};

	if (isMobile && activeMember) {
		return (
			<Paper elevation={5}>
				<BottomNavigation
					value={value}
					onChange={handleChange}
					showLabels
					sx={{ position: 'fixed', width: 1, bottom: 0 }}>
					{today && (
						<BottomNavigationAction
							label='Today'
							value={TODAY}
							icon={value === DATES ? <Today /> : <TodayOutlined />}
						/>
					)}

					<BottomNavigationAction
						label='Dates'
						value={DATES}
						icon={value === DATES ? <DateRange /> : <DateRangeOutlined />}
					/>

					<BottomNavigationAction
						label='Tours'
						value={CONSOLE}
						icon={value === CONSOLE ? <Dashboard /> : <DashboardOutlined />}
					/>
				</BottomNavigation>
			</Paper>
		);
	}
	return null;
});

export default BottomNav;
