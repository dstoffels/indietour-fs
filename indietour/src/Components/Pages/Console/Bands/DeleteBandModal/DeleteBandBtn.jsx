import { Button } from '@mui/material';
import React from 'react';
import useBands from '../useBands.js';

const DeleteBandBtn = ({ bandName }) => {
	const { deleteBand } = useBands();
	const handleClick = () => deleteBand();
	return (
		<Button fullWidth color='error' size='small' variant='contained' onClick={handleClick}>
			{`YES, DELETE ${bandName}`}
		</Button>
	);
};

export default DeleteBandBtn;
