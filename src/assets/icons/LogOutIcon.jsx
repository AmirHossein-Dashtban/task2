import React from 'react';

const SvgComponent = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={18}
		height={18}
		fill="none"
		{...props}
	>
		<path
			fill="#D0BCFF"
			d="m14 5-1.41 1.41L14.17 8H6v2h8.17l-1.58 1.58L14 13l4-4-4-4ZM2 2h7V0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h7v-2H2V2Z"
		/>
	</svg>
);

export default SvgComponent;
