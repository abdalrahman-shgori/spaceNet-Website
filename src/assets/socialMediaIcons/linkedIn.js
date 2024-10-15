import { useTheme } from "@mui/material";
import * as React from "react"
const LinkedInSvg = (props) => {
    const theme = useTheme();
    const isLightMode = theme.palette.mode === "light";
  
    return(
         <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
    style={{
        cursor: "pointer",
        transition: "fill 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector("path:nth-of-type(2)").style.fill = isLightMode ? "#9D89FC" : "#E9FA50"; 

    }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector("path:nth-of-type(2)").style.fill = "#fff"; 
    }}
     
  >
    <path
      fill="#051A2F"
      d="M42 21c0 10.607-7.863 19.375-18.076 20.798a21.207 21.207 0 0 1-6.288-.066C7.638 40.122 0 31.452 0 20.999 0 9.402 9.402 0 21 0s21 9.402 21 21Z"
    />
    <path
     style={{
        transition: "fill 0.5s ease", 
      }}
      fill="#FEFFFC"
      d="M10.218 13.908a2.527 2.527 0 0 1-.84-1.93c0-.765.28-1.437.84-1.957.56-.52 1.28-.78 2.165-.78.884 0 1.575.26 2.134.78.56.52.84 1.173.84 1.958 0 .785-.28 1.409-.84 1.929-.56.52-1.27.78-2.134.78-.864 0-1.605-.26-2.165-.78Zm4.667 2.982v15.933H9.85V16.89h5.034ZM31.647 18.463c1.097 1.191 1.646 2.827 1.646 4.91v9.17H28.51V24.02c0-1.05-.272-1.866-.816-2.448-.544-.581-1.276-.872-2.195-.872-.919 0-1.65.292-2.195.872-.544.582-.816 1.398-.816 2.448v8.524h-4.81V16.847h4.81v2.082c.488-.694 1.144-1.242 1.97-1.646.825-.403 1.754-.605 2.785-.605 1.838 0 3.306.597 4.403 1.786h.001Z"
    />
  </svg>
    )
}
 

export default LinkedInSvg
