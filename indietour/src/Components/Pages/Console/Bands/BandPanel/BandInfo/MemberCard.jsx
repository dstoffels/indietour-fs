import { Card, CardContent, Divider, Typography } from '@mui/material';
import { MEMBER } from 'constants/roles.js';
import React from 'react';
import useBands from '../../useBands.js';

const MemberCard = ({ member, isLast }) => {
	const { activeMember } = useBands();

	const role = member.role !== MEMBER ? ` (${member.role})` : '';

	const isActive = activeMember.email === member.email;

	return (
		<>
			<Card elevation={isActive ? 4 : 1} className='d-flex'>
				<CardContent className='p-2'>
					<Typography color={isActive ? 'secondary' : ''}>{`${
						member.displayName + role
					}`}</Typography>
					<Typography color={isActive ? 'secondary' : ''} variant='caption'>
						{member.email}{' '}
					</Typography>
				</CardContent>
			</Card>
			{!isLast && <Divider />}
		</>
	);
};

export default MemberCard;
