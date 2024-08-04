import React from 'react';

const SvgComponent = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={8}
		height={14}
		fill="none"
		{...props}
	>
		<path
			fill="#D0BCFF"
			d="m.077 12.487 1.18 1.18L7.923 7 1.257.333l-1.18 1.18L5.563 7 .077 12.487Z"
		/>
	</svg>
);

export default SvgComponent;
