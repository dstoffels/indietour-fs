import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';
import useTours from '../../useTours.js';
import ArchiveTourBtn from './ArchiveTourBtn.jsx';

const TourCard = ({ tour }) => {
	const { activeTour, selectTour } = useTours();

	const isActive = tour?.name === activeTour?.name;
	const active = isActive ? ' (active)' : '';

	const handleClick = () => !isActive && selectTour(tour);

	return (
		<Card className='d-flex'>
			<CardActionArea onClick={handleClick}>
				<CardContent className='p-2'>
					<Typography color={isActive && 'primary'}>{tour?.name + active}</Typography>
				</CardContent>
			</CardActionArea>
			<ArchiveTourBtn tour={tour} />
		</Card>
	);
};

export default TourCard;
