import { useTheme } from "@mui/material"
import * as React from "react"
const TimePickerIcon = (props) => {
    const theme=useTheme()
  
  return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={9}
    fill="none"
    {...props}
  >
    <path 
          fill={theme.palette.mode === 'light' ? "#051A2F" : "#FFFFFF"}

     d="M.566.014 9.082 8.53 17.598.014" />
  </svg>
  )

}


export default TimePickerIcon
