import { Paper, Stack, TextField } from '@mui/material';
import DatePicker from 'Components/Common/DatePicker/DatePicker.jsx';
import ModalForm from 'Components/Common/ModalForm/ModalForm.jsx';
import { TourDate } from 'Components/Pages/Console/Tours/TourForm/DateRangePicker.jsx';
import useForm from 'hooks/useForm.js';
import React from 'react';
import { eventBldr } from 'utils/helpers.js';
import ConfirmSwitch from '../DateDetailsPanel/DateDetails/ConfirmSwitch.jsx';
import IsShowDaySwitch from '../DateDetailsPanel/DateDetails/IsShowDaySwitch.jsx';
import { ADD_DATE_FORM_ID } from './AddDateModal.jsx';
import LocationField from '../../../Common/LocationField/LocationField.jsx';

const getNextDate = dates => {
	if (dates.length) {
		const lastDate = new Date(dates[dates.length - 1].date);
		lastDate.setDate(lastDate.getDate() + 1);
		return lastDate.toDateString();
	}
	return new Date().toDateString();
};

/**
 *
 * @param {*} param0
 * @returns
 */
const AddDateForm = ({ tourName, tourDates, submitBtn, onSubmit }) => {
	const { form, handleChange, handleSubmit } = useForm(TourDate(getNextDate(tourDates)), submitCB);

	function submitCB() {
		onSubmit(form);
	}

	return (
		<Paper elevation={0} className='p-3'>
			<ModalForm
				title={`Adding date to ${tourName}`}
				onSubmit={handleSubmit}
				formId={ADD_DATE_FORM_ID}>
				<Stack direction='row' spacing={2} justifyContent='space-between'>
					<DatePicker
						value={form.date}
						onChange={handleChange}
						tourDates={tourDates}
						size='medium'
					/>
					<Stack spacing={-1}>
						<ConfirmSwitch value={form.isConfirmed} onChange={handleChange} />
						<IsShowDaySwitch value={form.isShowDay} onChange={handleChange} />
					</Stack>
				</Stack>

				<TextField
					label='Event Title'
					name='title'
					onChange={handleChange}
					value={form.title}
					onBlur={() => !form.location && handleChange(eventBldr('location', form.title))}
				/>
				<LocationField value={form.location} onChange={handleChange} />

				{form.isShowDay && (
					<TextField
						multiline
						maxRows={4}
						label='Deal'
						name='deal'
						onChange={handleChange}
						value={form.deal}
					/>
				)}

				<TextField
					label='Notes'
					multiline
					maxRows={6}
					name='notes'
					onChange={handleChange}
					value={form.notes}
				/>
			</ModalForm>

			<Stack spacing={1} marginTop={2}>
				{submitBtn}
				{/* <div className='flex-end'>{actions}</div> */}
			</Stack>
		</Paper>
	);
};

export default AddDateForm;
