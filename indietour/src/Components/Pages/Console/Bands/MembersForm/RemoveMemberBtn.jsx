import { Clear } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React from 'react';

const RemoveMemberBtn = ({ i, members, setMembers }) => {
	const handleClick = () => {
		members.splice(i, 1);
		setMembers([...members]);
	};
	return (
		<IconButton
			className='ms-2'
			variant='contained'
			color='error'
			size='small'
			onClick={handleClick}>
			<Clear />
		</IconButton>
	);
};

export default RemoveMemberBtn;
