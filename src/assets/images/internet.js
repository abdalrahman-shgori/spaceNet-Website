import * as React from "react"
const InternetCursor = (props) => {
    return(
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    viewBox="0 0 91 92"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={7.6}
      d="M0 35.745h4.136m0 0h1.608c28.464 0 51.141 23.81 49.756 52.24L51.56 88h-.06l35.5-.136v-54.6L53.762 7.339a13.236 13.236 0 0 0-16.265-.013L4.136 33.264v2.481ZM0 68.836h1.655c11.879 0 21.509 9.63 21.509 21.51V92"
    />
    <path
      stroke="#000"
      strokeWidth={7.6}
      d="M0 53h5.255C24.444 53 40 68.556 40 87.745V92"
    />
  </svg>
    )

}
  

export default InternetCursor
