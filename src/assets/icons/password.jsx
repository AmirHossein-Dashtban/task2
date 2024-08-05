import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={41}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="#CAC4D0"
                d="M20 15a9.77 9.77 0 0 1 8.82 5.5A9.77 9.77 0 0 1 20 26a9.77 9.77 0 0 1-8.82-5.5A9.77 9.77 0 0 1 20 15Zm0-2c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Zm0 5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5Zm0-2c-2.48 0-4.5 2.02-4.5 4.5S17.52 25 20 25s4.5-2.02 4.5-4.5S22.48 16 20 16Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <rect width={40} height={40} y={0.5} fill="#fff" rx={20} />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent
