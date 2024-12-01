import * as React from "react"
const Bracket = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={119}
    height={73}
   
    fill="none"
    {...props}
  >
    <path
      fill={props.index === 0 ? "#fff" : props.index === 1 ?  "#fff" : props.index === 2 ? "#FA6423" : props.index === 3 ? "#FA6423" : "#fff"}
      d="M115.307.377.057 5.814l1.2 25.459 89.172-4.207 2.156 45.694 26.079-1.23L115.307.377Z"
    />
  </svg>
)
export default Bracket
