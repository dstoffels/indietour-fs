import { Divider, Stack, Typography } from '@mui/material';
import Page from 'Components/Common/Page/Page.jsx';
import Panel from 'Components/Common/Panel/Panel.jsx';
import React from 'react';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';
import Map from '../Dates/DateDetailsPanel/DateDetails/Map.jsx';
import useDates from '../Dates/useDates.js';

const Today = () => {
	const { today } = useDates();

	if (today) {
		const { date, title, location, deal, notes, timeslots, contacts } = today;

		const schedule = timeslots.map(event => {
			return (
				<Typography key={event.key}>
					{event.startTime}: {event.description}
				</Typography>
			);
		});

		const contactsList = contacts.map(contact => (
			<div key={contact.key} style={{ marginBottom: 8 }}>
				<Typography fontWeight={500}>
					{contact.name} ({contact.title})
				</Typography>
				<Typography variant='body1'>{contact.phone}</Typography>
				<Typography variant='body1'>{contact.email}</Typography>
			</div>
		));

		return (
			<Page centered>
				<Panel
					title={`${date}
					${title}`}>
					<Stack spacing={1}>
						<Panel.Field label='Location'>{location} </Panel.Field>
						<Divider sx={{ marginX: '-500px' }} />

						<Panel.Field label='Notes'>{notes}</Panel.Field>
						<Divider />

						<div>
							<Typography color='primary' variant='caption'>
								Schedule
							</Typography>
							{schedule}
						</div>
						<Divider />
						<div>
							<Typography color='primary' variant='caption'>
								Contacts
							</Typography>
							{contactsList}
						</div>
					</Stack>
				</Panel>
			</Page>
		);
	}
	return null;
};

export default withAuthentication(Today);
