import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={18}
        fill="none"
        {...props}
    >
        <path
            fill="#D0BCFF"
            d="M15.5 9.75h-5.25V15h-1.5V9.75H3.5v-1.5h5.25V3h1.5v5.25h5.25v1.5Z"
        />
    </svg>
)
export default SvgComponent
