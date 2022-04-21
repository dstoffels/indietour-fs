import { AccessTime } from '@mui/icons-material';
import { Box, Divider, Stack } from '@mui/material';
import React from 'react';

const Timeblock = ({ type, isFirst, isLast }) => {
	const topLine = 20;

	return (
		<Stack marginRight={2}>
			{!isFirst && (
				<Stack direction='row' marginTop={`-${topLine}px`}>
					<div
						style={{
							width: '100%',
							borderRight: '1px solid gray',
							height: '2px',
							paddingBottom: topLine,
						}}></div>
					<div className='w-100'></div>
				</Stack>
			)}
			<AccessTime fontSize='small' />
			{!isLast && (
				<Stack direction='row' marginBottom='-200px'>
					<div
						style={{
							width: '100%',
							borderRight: '1px solid gray',
							height: '100px',
						}}></div>
					<div className='w-100'></div>
				</Stack>
			)}
		</Stack>
	);
};

export default Timeblock;
