import { createTheme } from '@mui/material';
import palette from './palette.js';

const theme = createTheme({
	palette: {
		background: {
			default: palette.bg.default,
			paper: palette.bg.paper,
		},

		primary: {
			main: palette.primary,
		},

		secondary: {
			main: palette.secondary,
		},

		error: {
			main: palette.error,
		},

		warning: {
			main: palette.warning,
		},

		success: {
			main: palette.success,
		},

		action: {
			hover: 'rgba(255, 255, 255, 0.05)',
			selected: '#2D2D358D',
		},

		nav: {
			main: palette.nav.main,
		},

		text: {
			primary: palette.text.primary,
			secondary: palette.text.secondary,
		},
		mode: 'dark',
	},
	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				input: {
					'&:-webkit-autofill': {
						WebkitBoxShadow: '0 0 0 100px #00000000 inset',
						WebkitTextFillColor: '#fff',
					},
				},
			},
		},
	},
});

export default theme;
