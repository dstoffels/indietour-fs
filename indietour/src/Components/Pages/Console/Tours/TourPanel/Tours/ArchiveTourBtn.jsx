import { Archive } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
import withAdmin from 'Components/Auth/Authorization/withAdmin.jsx';
import React from 'react';

const ArchiveTourBtn = ({ tour, withText = false }) => {
	return (
		<Tooltip title={`Archive ${tour?.name}`}>
			{Boolean(withText) ? (
				<Button color='warning' startIcon={<Archive />}>
					ARCHIVE TOUR
				</Button>
			) : (
				<Button color='warning' className='p-0'>
					<Archive />
				</Button>
			)}
		</Tooltip>
	);
};

export default withAdmin(ArchiveTourBtn);
