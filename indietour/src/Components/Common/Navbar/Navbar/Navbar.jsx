import React from 'react';
import { AppBar, Stack, Toolbar } from '@mui/material';
import AccountMenu from '../AccountMenu/AccountMenu.jsx';
import TourSelector from 'Components/Pages/Console/Tours/TourSelector/TourSelector.jsx';
import Logo from 'images/indietour-logo.png';
import useWindow from 'hooks/useWindow.js';
import {
	Dashboard,
	DashboardOutlined,
	DateRange,
	DateRangeOutlined,
	Today,
	TodayOutlined,
} from '@mui/icons-material';
import NavBtn from './NavBtn.jsx';
import { CONSOLE, DATES, HOME, PASSWORD, WAITING_ROOM, TODAY } from 'constants/routes.js';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import { useLocation } from 'react-router-dom';
import useDates from 'Components/Pages/Dates/useDates.js';

const Navbar = () => {
	const { isMobile } = useWindow();
	const { today } = useDates();
	const { activeTour } = useTours();
	const location = useLocation();

	const isVerified =
		location.pathname === HOME ||
		location.pathname === WAITING_ROOM ||
		location.pathname === PASSWORD;

	return (
		<AppBar position='sticky' elevation={2}>
			<Toolbar className={`w-100 flex-${isMobile && isVerified ? 'end' : 'between'}`}>
				{!isMobile && (
					<>
						<img width='100px' src={Logo} className='me-5' alt='Indietour Logo' />
						<Stack direction='row' spacing={4}>
							<NavBtn
								disabled={!today}
								label='Today'
								page={TODAY}
								activeIcon={<Today />}
								inactiveIcon={<TodayOutlined />}
							/>
							<NavBtn
								label='Dates'
								page={DATES}
								activeIcon={<DateRange />}
								inactiveIcon={<DateRangeOutlined />}
								disabled={!activeTour}
							/>
							<NavBtn
								label='Tours'
								page={CONSOLE}
								activeIcon={<Dashboard />}
								inactiveIcon={<DashboardOutlined />}
							/>
						</Stack>
					</>
				)}
				<TourSelector />
				<AccountMenu />
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
