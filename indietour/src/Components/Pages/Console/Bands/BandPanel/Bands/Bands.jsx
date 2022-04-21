import { Divider } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel.jsx';
import React from 'react';
import NewBandModalBtn from '../../NewBandModal/NewBandModalBtn.jsx';
import useBands from '../../useBands.js';
import BandCard from './BandCard.jsx';

const Bands = props => {
	const { bands } = useBands();

	const bandCards = bands.map((band, i, bands) => (
		<div key={band.bandName}>
			<BandCard band={band} />
			{i < bands.length - 1 && <Divider />}
		</div>
	));

	return (
		<Panel.Section title='My Bands' topActions={<NewBandModalBtn text='CREATE NEW BAND' />}>
			{bandCards}
		</Panel.Section>
	);
};

export default Bands;
