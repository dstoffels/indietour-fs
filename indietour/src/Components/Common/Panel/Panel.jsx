import {
	Card,
	CardActions,
	CardContent,
	Divider,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import LocationField from 'Components/Common/LocationField/LocationField.jsx';
import React from 'react';
import './Panel.css';

const Panel = ({ title = '', actions, closeBtn, children }) => {
	const header = Boolean(title) && <h6 className='panel-header'>{title}</h6>;

	return (
		<Grid xs={12} sm={6} className='my-2 stretch' item width='100%'>
			<Card sx={{ position: 'relative' }} elevation={6} className='stretch'>
				{Boolean(closeBtn) && <div className='upper-right'>{closeBtn}</div>}
				{header}
				<CardContent className='stretch'>{children}</CardContent>
				{Boolean(actions) && <CardActions className='justify-content-end'>{actions}</CardActions>}
			</Card>
		</Grid>
	);
};

Panel.Section = ({ title, topActions, bottomActions, children }) => {
	return (
		<Card elevation={0} className='mb-2'>
			{title && <h5 className='panel-header'>{title}</h5>}
			{Boolean(topActions) && (
				<CardActions className='justify-content-end'>{topActions}</CardActions>
			)}
			<CardContent>{children}</CardContent>
			{Boolean(bottomActions) && (
				<CardActions className='justify-content-end'>{bottomActions}</CardActions>
			)}
		</Card>
	);
};

Panel.Divider = props => <Divider className='my-4' />;

Panel.Header = ({ label = '', onChange, name, size = 'small', children, editing = false }) => {
	if (editing) {
		return (
			<TextField
				fullWidth
				rows={3}
				size={size}
				variant='outlined'
				value={children}
				label={label}
				onChange={onChange}
				name={name || label.toLowerCase()}
			/>
		);
	}
	return (
		<Typography color='' variant='h6' marginBottom={0}>
			{children}
		</Typography>
	);
};

Panel.Field = ({
	multiline = false,
	label,
	children,
	onChange,
	size = 'small',
	name,
	show = true,
	editing = false,
	isLocationField = false,
}) => {
	if (editing) {
		if (isLocationField) {
			return <LocationField value={children} size={size} onChange={onChange} openOnStart={false} />;
		}

		return (
			<TextField
				fullWidth
				multiline={multiline}
				size={size}
				variant='outlined'
				value={children}
				label={label}
				onChange={onChange}
				name={name || label.toLowerCase()}
				InputProps={{ style: { fontSize: 'smaller' } }}
			/>
		);
	}

	return (
		show && (
			<div>
				<Typography color='primary' variant='caption'>
					{label}
				</Typography>
				<Typography component='div' variant='body1'>
					{children}
				</Typography>
			</div>
		)
	);
};

export default Panel;
