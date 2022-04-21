import { FormControlLabel, Stack, Switch, Tooltip, Typography } from '@mui/material';
import withAdmin from 'Components/Auth/Authorization/withAdmin.jsx';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';
import useDates from '../useDates.js';

const EditModeSwitch = () => {
	const { editing, toggleEditMode, unsavedChanges } = useDates();
	const { openDeleteModal, modalKeys } = useModal();

	const handleChange = () =>
		unsavedChanges ? openDeleteModal(modalKeys.discardDateChanges) : toggleEditMode();

	return (
		<Tooltip title='Toggle edit mode'>
			<FormControlLabel
				label='Edit'
				componentsProps={{ typography: { color: 'warning.main', variant: 'button' } }}
				control={
					<Switch color='warning' checked={editing} onChange={handleChange} className='mx-auto' />
				}
			/>
		</Tooltip>
	);
};

export default withAdmin(EditModeSwitch);
