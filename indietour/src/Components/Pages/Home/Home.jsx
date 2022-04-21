import { Button, Collapse, Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import useLogin from '../../../hooks/useLogin.js';
import SignUpBtn from '../../Auth/AuthForm/SignUp/SignUpBtn.jsx';
import SignUpForm from '../../Auth/AuthForm/SignUp/SignUpForm.jsx';
import Logo from 'images/logo.png';
import { AccountBox, Clear } from '@mui/icons-material';

const Home = () => {
	useLogin();
	const [signup, setSignup] = useState(false);

	const handleSignup = () => setSignup(true);

	return (
		<Grid container justifyContent='center' paddingTop={5}>
			<Grid container item xs={11} sm={10} md={9} lg={8} xl={6}>
				<img width='100%' src={Logo} alt='' />
			</Grid>
			<Grid container item justifyContent='center' marginTop={5}>
				<Stack spacing={6} padding={2}>
					<Collapse in={signup}>
						<Paper elevation={4} className='p-3'>
							<Stack spacing={2}>
								<Stack direction='row' spacing={5} justifyContent='space-between'>
									<Typography color='primary' variant='h5'>
										Create a new account
									</Typography>
									<IconButton color='warning' onClick={() => setSignup(false)}>
										<Clear />
									</IconButton>
								</Stack>
								<SignUpForm />
								<SignUpBtn />
							</Stack>
						</Paper>
					</Collapse>
					<Collapse in={!signup} appear>
						<Typography textAlign='center' color='secondary' fontSize={15} variant='overline'>
							{`Plot tours & manage booking
								Set & share schedules with band & crew
								Create & manage unlimited tours
								Manage multiple artists`}
						</Typography>
					</Collapse>
					{!signup && (
						<Button size='large' startIcon={<AccountBox />} color='primary' onClick={handleSignup}>
							CREATE A NEW ACCOUNT
						</Button>
					)}
				</Stack>
			</Grid>
		</Grid>
	);
};

export default Home;
