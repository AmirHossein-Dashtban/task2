import React from 'react';

const SvgComponent = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={47}
		height={53}
		fill="none"
		{...props}
	>
		<path
			fill="#D0BCFF"
			d="M34.188.375h-28.5a4.764 4.764 0 0 0-4.75 4.75v33.25h4.75V5.125h28.5V.375Zm-2.376 9.5H15.188c-2.612 0-4.726 2.137-4.726 4.75l-.024 33.25c0 2.612 2.114 4.75 4.727 4.75h26.149a4.764 4.764 0 0 0 4.75-4.75v-23.75l-14.25-14.25Zm-16.625 38v-33.25h14.25V26.5h11.875v21.375H15.189Z"
		/>
	</svg>
);

export default SvgComponent;
