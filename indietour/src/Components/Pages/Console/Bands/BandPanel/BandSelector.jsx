import React from 'react';
import Selector from 'Components/Common/Selector/Selector.jsx';
import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';
import useBands from '../useBands.js';
import EditBandModalBtn from '../EditBandModal/EditBandModalBtn.jsx';
import NewBandModalBtn from '../NewBandModal/NewBandModalBtn.jsx';

const BandSelector = props => {
	const { activeMember, bands, selectBand } = useBands();

	const handleChange = band => selectBand(band);

	const gate = Boolean(bands.find(b => b.name === activeMember?.name));

	if (activeMember && bands.length && gate) {
		return (
			<>
				<h6 className='panel-header'>Active Band</h6>
				<div className='flex-center'>
					<Selector
						onChange={handleChange}
						id='band-selector'
						options={bands}
						nameKey='bandName'
						defaultSelection={activeMember}
					/>
					<div className='d-flex ms-3'>
						<EditBandModalBtn />
						<NewBandModalBtn />
					</div>
				</div>
			</>
		);
	}
	return null;
};

export default withAuthentication(BandSelector);
