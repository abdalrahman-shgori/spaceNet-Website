import { useTheme } from "@mui/material";
import * as React from "react"
const PaintrestSvg = (props) => {
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
      d="M42 21c0 10.607-7.863 19.375-18.076 20.798a21.207 21.207 0 0 1-6.288-.067C7.638 40.122 0 31.451 0 21 0 9.402 9.402 0 21 0s21 9.402 21 21Z"
    />
    <path
     style={{
        transition: "fill 0.5s ease", 
      }}
      fill="#fff"
      fillRule="evenodd"
      d="M19.059 26.54c-.026.088-.05.162-.07.236-1.124 4.405-1.248 5.383-2.404 7.43a22.857 22.857 0 0 1-1.859 2.774c-.077.1-.15.229-.305.198-.17-.037-.182-.19-.2-.325-.185-1.338-.287-2.68-.244-4.032.059-1.761.276-2.366 2.546-11.909.033-.145-.004-.266-.053-.398-.543-1.465-.65-2.953-.177-4.46 1.028-3.254 4.718-3.504 5.363-.818.398 1.662-.654 3.834-1.462 7.049-.668 2.651 2.453 4.535 5.12 2.6 2.46-1.783 3.415-6.061 3.234-9.093-.358-6.045-6.986-7.35-11.192-5.404-4.821 2.229-5.917 8.205-3.74 10.935.276.347.796.56.705.912-.14.547-.264 1.098-.415 1.642-.112.405-.758.552-1.167.386a4.935 4.935 0 0 1-2.013-1.508c-1.85-2.289-2.378-6.816.066-10.65C13.5 7.86 18.536 6.142 23.135 6.663c5.493.625 8.964 4.377 9.614 8.634.296 1.94.083 6.722-2.64 10.1-3.132 3.884-8.209 4.142-10.55 1.757-.181-.182-.326-.396-.503-.615h.003Z"
      clipRule="evenodd"
    />
  </svg> 
    )
}
  

export default PaintrestSvg
