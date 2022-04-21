import { Paper, Stack } from '@mui/material';
import React from 'react';

const ModalForm = ({ title, formId, onSubmit, children }) => {
	return (
		<>
			<h5>{title} </h5>
			<form id={formId} onSubmit={onSubmit}>
				<Stack spacing={2} marginTop={2}>
					{children}
				</Stack>
			</form>
		</>
	);
};

export default ModalForm;
