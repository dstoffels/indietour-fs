import { Route, Routes } from 'react-router-dom';
import {
	HOME,
	WAITING_ROOM,
	CONSOLE,
	TODAY,
	BOOKING,
	DATES,
	PASSWORD,
} from './constants/routes.js';
import Home from './Components/Pages/Home/Home.jsx';
import ConsolePage from './Components/Pages/Console/ConsolePage/ConsolePage.jsx';
import Navbar from './Components/Common/Navbar/Navbar/Navbar.jsx';
import VerifyEmail from './Components/Pages/VerifyEmail/VerifyEmail.jsx';
import BottomNav from './Components/Common/BottomNav/BottomNav.jsx';
import PasswordPage from 'Components/Pages/PasswordPage/PasswordPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import useUser from './hooks/useUser.js';
import Booking from './Components/Pages/Booking/Booking.jsx';
import Today from './Components/Pages/Today/Today.jsx';
import DatesPage from './Components/Pages/Dates/DatesPage.jsx';
import AuthProvider from 'Components/Auth/Authentication/AuthProvider.jsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'theme/theme.js';
import MainModal from 'Components/Common/MainModal/MainModal.jsx';
import './App.css';

function App() {
	const { user } = useUser();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<MainModal />
			<Navbar />
			<AuthProvider>
				<Routes>
					<Route exact path={HOME} element={<Home />}></Route>
					<Route path={WAITING_ROOM} element={<VerifyEmail />} />
					<Route path={PASSWORD} element={<PasswordPage />} />
					<Route path={TODAY} element={<Today />} />
					<Route path={DATES} element={<DatesPage />} />
					<Route path={BOOKING} element={<Booking />} />
					<Route path={CONSOLE} element={<ConsolePage />} />
				</Routes>
			</AuthProvider>
			{Boolean(user) && <BottomNav />}
		</ThemeProvider>
	);
}

export default App;
