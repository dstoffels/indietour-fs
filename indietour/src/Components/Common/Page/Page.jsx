import { Grid, Slide } from '@mui/material';
import useWindow from 'hooks/useWindow.js';
import React from 'react';

const Page = ({ children, centered }) => {
	const { isMobile } = useWindow();

	return (
		<Grid
			container
			item
			direction='row'
			justifyContent='center'
			alignItems='stretch'
			overflow='hidden'>
			<Slide direction={isMobile ? 'up' : 'down'} in={true} appear>
				<Grid
					container
					item
					xl={8}
					lg={9}
					md={10}
					xs={12}
					columnSpacing={3}
					paddingX='2px'
					paddingBottom='56px'
					paddingTop='64px'
					marginTop='-64px'
					maxHeight='100vh'
					height='100vh'
					overflow='auto'
					alignItems='stretch'
					justifyContent={centered ? 'center' : ''}>
					{children}
				</Grid>
			</Slide>
		</Grid>
	);
};

export default Page;
