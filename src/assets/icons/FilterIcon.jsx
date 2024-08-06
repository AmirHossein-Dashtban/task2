import React from 'react';

const SvgComponent = (props) => (
	<svg
		style={{ paddingRight: '1.25rem' }}
		xmlns="http://www.w3.org/2000/svg"
		width={18}
		height={12}
		fill="none"
		{...props}
	>
		<path fill="#D0BCFF" d="M7 12h4v-2H7v2ZM0 0v2h18V0H0Zm3 7h12V5H3v2Z" />
	</svg>
);

export default SvgComponent;
