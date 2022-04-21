import { Slide, Stack } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel.jsx';
import ScrollWindow from 'Components/Common/ScrollWindow/ScrollWindow.jsx';
import React, { useRef, useState } from 'react';
import DaySheetModalBtn from '../DaySheetModal/DaySheetModalBtn.jsx';
import useDates from '../useDates.js';
import CloseDetailsBtn from './CloseDetailsBtn.jsx';
import ContactsList from './Contacts/ContactsList.jsx';
import DateDetails from './DateDetails/DateDetails.jsx';
import DateDetailsTabs, { DateTabPanel } from './DateDetailsTabs.jsx';
import DeleteDateModalBtn from './DeleteDateModal/DeleteDateModalBtn.jsx';
import EditModeSwitch from './EditModeSwitch.jsx';
import SaveDateBtn from './SaveDateBtn.jsx';
import Schedule from './Schedule/Schedule.jsx';

const DateDetailsPanel = () => {
	const [tabIndex, setTabIndex] = useState(0);

	const { activeDate, editing, editActiveDate } = useDates();

	const containerRef = useRef(null);

	const actions = (
		<Stack direction='row'>
			<Slide direction='up' container={containerRef.current} in={editing}>
				<div>
					<SaveDateBtn />
					<DeleteDateModalBtn />
				</div>
			</Slide>
			<EditModeSwitch />
		</Stack>
	);

	if (activeDate) {
		return (
			<Panel
				title={`${activeDate?.date}\n${activeDate.title}`}
				actions={actions}
				closeBtn={<CloseDetailsBtn />}>
				<DateDetailsTabs value={tabIndex} onChange={setTabIndex} />
				<ScrollWindow maxHeight='61vh'>
					<DateTabPanel value={tabIndex} i={0}>
						<DateDetails
							activeDate={activeDate}
							editMode={editing}
							editActiveDate={editActiveDate}
						/>
					</DateTabPanel>
					<DateTabPanel value={tabIndex} i={1} slideDirection={'left'}>
						<Schedule tourDate={activeDate} />
					</DateTabPanel>
					<DateTabPanel value={tabIndex} i={2} slideDirection='left'>
						<ContactsList />
					</DateTabPanel>
				</ScrollWindow>
			</Panel>
		);
	}
	return null;
};

export default DateDetailsPanel;
