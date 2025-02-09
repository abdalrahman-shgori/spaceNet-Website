import { useTheme } from "@mui/material"
import * as React from "react"
const CalenderIcon = (props) => { 
  const theme=useTheme()
  return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
    style={{
      position:"relative",
      top:"-3px"
    }}
  >
    <path
      fill={theme.palette.mode === 'light' ? "#051A2F" : "#FFFFFF"}
      d="M3.346 17.904h11.355c.753 0 1.475-.269 2.007-.748.533-.48.832-1.129.832-1.806V5.13c0-.451-.2-.884-.555-1.204a2.004 2.004 0 0 0-1.338-.499h-1.892V1.724a.81.81 0 0 0-.277-.602 1.002 1.002 0 0 0-.67-.25c-.25 0-.491.09-.669.25a.81.81 0 0 0-.277.602v1.703H6.185V1.724a.81.81 0 0 0-.277-.602 1.002 1.002 0 0 0-.67-.25c-.25 0-.49.09-.668.25a.81.81 0 0 0-.277.602v1.703H2.4c-.502 0-.983.18-1.338.5-.355.319-.554.752-.554 1.203v10.22c0 .677.299 1.327.831 1.806.533.48 1.255.748 2.007.748ZM2.4 9.814c0-.113.05-.221.139-.3a.501.501 0 0 1 .334-.126h12.301a.5.5 0 0 1 .335.125c.088.08.138.188.138.301v5.536a.81.81 0 0 1-.277.602c-.177.16-.418.25-.67.25H3.347c-.25 0-.491-.09-.669-.25a.81.81 0 0 1-.277-.602V9.814Z"
    />
  </svg>
  )
 
}


export default CalenderIcon
