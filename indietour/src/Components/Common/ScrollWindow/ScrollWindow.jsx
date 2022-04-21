import React from 'react';

const ScrollWindow = ({ maxHeight, children }) => {
	return (
		<div style={{ margin: '0 -0.5rem', overflowY: 'auto', overflowX: 'hidden', maxHeight }}>
			<div style={{ margin: '0.5rem' }}>{children}</div>
		</div>
	);
};

export default ScrollWindow;
