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
                fillRule="evenodd"
                d="M20 10.5c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-9.41 3.59-3.59L25 16.91l-3.59 3.59L25 24.09l-1.41 1.41L20 21.91l-3.59 3.59L15 24.09l3.59-3.59L15 16.91l1.41-1.41L20 19.09Z"
                clipRule="evenodd"
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
