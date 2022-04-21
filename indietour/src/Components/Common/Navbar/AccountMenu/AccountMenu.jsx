import { Login, Settings } from '@mui/icons-material';
import { Avatar, Button, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';
import AuthForm from 'Components/Auth/AuthForm/AuthForm/AuthForm.jsx';
import LogOutBtn from 'Components/Auth/LogOutBtn/LogOutBtn.jsx';
import useUser from 'hooks/useUser.js';
import React, { useState } from 'react';

const AccountMenu = props => {
	// STATE
	const { user } = useUser();
	// LOCAL STATE
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	// HANDLERS
	const handleClick = e => setAnchorEl(e.currentTarget);
	const handleClose = () => setAnchorEl(null);

	const width = !user && { width: 400 };
	const menuItems = user ? (
		[
			<MenuItem disabled key='display-name'>
				Hi, {user.displayName}!
			</MenuItem>,
			<MenuItem key='settings-btn'>
				<ListItemIcon>
					<Settings color='primary' />
				</ListItemIcon>
				<Typography color='primary'>Settings</Typography>
			</MenuItem>,
			<LogOutBtn key='logout-btn' />,
		]
	) : (
		<AuthForm closeMenu={handleClose} />
	);

	return (
		<div>
			<Button sx={{ textTransform: 'none' }} onClick={handleClick} size='small' color='primary'>
				{user ? (
					<Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
						{user?.displayName?.charAt(0)}
					</Avatar>
				) : (
					<>
						<Typography className='me-1'>Login</Typography>
						<Login />
					</>
				)}
			</Button>

			<Menu
				anchorEl={anchorEl}
				id='account-menu'
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				MenuListProps={{
					className: 'p-0',
				}}
				PaperProps={{
					elevation: 5,
					sx: {
						...width,
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
					},
				}}>
				{menuItems}
			</Menu>
		</div>
	);
};

export default AccountMenu;
