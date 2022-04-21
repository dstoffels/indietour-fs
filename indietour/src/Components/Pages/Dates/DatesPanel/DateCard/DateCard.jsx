import {
	Card,
	CardActionArea,
	CardContent,
	Collapse,
	Divider,
	Stack,
	Typography,
} from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React, { memo, useEffect, useState } from 'react';
import useDates from '../../useDates.js';
import DateBlock from './DateBlock.jsx';
import DirectionsBtn from './DirectionsBtn.jsx';

const truncLocation = loc =>
	loc !== '' &&
	loc
		.split(',')
		.filter((seg, i) => !/\d/.test(seg) || i !== 0)
		.concat();

/**
 *
 * @param {*} param0
 * @returns
 */
const DateCard = ({ tourDate, isLast }) => {
	const { selectTourDate, deselectTourDate, showPastDates, activeDate, unsavedChanges } =
		useDates();

	const [isActive, setIsActive] = useState(false);

	const { openDeleteModal, modalKeys } = useModal();

	useEffect(() => {
		setIsActive(tourDate?.key === activeDate?.key);
	}, [activeDate]);

	const handleClick = () => {
		const toggleActiveTourDate = () => (isActive ? deselectTourDate() : selectTourDate(tourDate));
		unsavedChanges ? openDeleteModal(modalKeys.discardDateChanges) : toggleActiveTourDate();
	};

	const getIsPastDate = () => {
		const date = new Date(tourDate.date);
		const today = new Date();
		return date < today && date.toDateString() !== today.toDateString();
	};

	const fontStyle = getIsPastDate() ? 'italic' : '';
	const color = tourDate.isConfirmed ? '' : 'text.disabled';

	return (
		<Collapse in={!getIsPastDate() || showPastDates}>
			<>
				<Card
					elevation={isActive ? 4 : 1}
					className='flex-between'
					sx={{ position: 'relative', zIndex: isActive && 1 }}>
					<CardActionArea onClick={handleClick}>
						<CardContent className='p-2 flex-between'>
							<DateBlock fontStyle={fontStyle} color={color} date={tourDate.date} />
							<Stack className='w-100 ps-3'>
								<Typography fontStyle={fontStyle} color={color} variant='body1' fontWeight={600}>
									{tourDate.title}
								</Typography>
								<Typography fontStyle={fontStyle} color={color} variant='caption'>
									{truncLocation(tourDate.location)}
								</Typography>
							</Stack>
						</CardContent>
					</CardActionArea>
					<DirectionsBtn location={tourDate.location} />
				</Card>
				{!isLast && <Divider />}
			</>
		</Collapse>
	);
};

export default memo(DateCard);
