import React from 'react';

const SvgComponent = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={9}
		height={14}
		fill="none"
		{...props}
	>
		<path
			fill="#D0BCFF"
			d="M8.23 1.58 7.108.4.882 7l6.233 6.6 1.114-1.18L3.111 7l5.118-5.42Z"
		/>
	</svg>
);

export default SvgComponent;
