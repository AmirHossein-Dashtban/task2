import React from 'react';

const SvgComponent = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={10}
		height={16}
		fill="none"
		{...props}
	>
		<path
			fill="#D0BCFF"
			d="M.369 13.738 6.094 8 .369 2.263 2.13.5l7.5 7.5-7.5 7.5L.37 13.738Z"
		/>
	</svg>
);

export default SvgComponent;
