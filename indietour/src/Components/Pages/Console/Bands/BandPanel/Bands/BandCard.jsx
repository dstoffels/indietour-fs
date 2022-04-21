import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';
import useBands from '../../useBands.js';

const BandCard = ({ band }) => {
	const { activeMember, selectBand } = useBands();

	const isActive = band?.bandName === activeMember?.bandName;
	const active = isActive ? ' (active)' : '';

	const handleClick = () => !isActive && selectBand(band);

	return (
		<Card className='d-flex'>
			<CardActionArea onClick={handleClick}>
				<CardContent className='p-2'>
					<Typography color={isActive && 'primary'}>{band?.bandName + active} </Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default BandCard;
