import { useTheme } from "@mui/material"
import * as React from "react"
const ServicesLogo = (props) => {
    const theme=useTheme();
    const isAboutActive =props.isaboutactive
    console.log(isAboutActive,"1212121")

    return(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={23}
        fill="none"
        {...props}
      >
        <path
          fill={theme.palette.mode === 'light' && isAboutActive ? '#FFFFFF' : "#051A2F"}
          d="M13.622 1.885 11.938.157l-8.59 8.32a4.283 4.283 0 0 0-.002 6.15l7.326 7.107 11.445-11.112-3.12-3.216-1.752 1.733 1.486 1.536-4.373 4.485a5.011 5.011 0 1 1-7.085-7.086l6.349-6.189Z"
        />
        <path
          fill={theme.palette.mode === 'light' && isAboutActive ? '#FFFFFF' : "#051A2F"}
          d="m16.38 20.717 1.682 1.73 8.59-8.31a4.283 4.283 0 0 0 .003-6.154L19.322.878 7.89 11.974l3.119 3.218 1.753-1.732-1.485-1.537 4.376-4.482a5.01 5.01 0 1 1 7.08 7.092l-6.354 6.184Z"
        />
      </svg>
    )

}
export default ServicesLogo
