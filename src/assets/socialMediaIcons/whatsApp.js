import { useTheme } from "@mui/material";
import * as React from "react"
const WhatsAppSvg = (props) => {
    const theme = useTheme();
    const isLightMode = theme.palette.mode === "light";

    return (
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
                e.currentTarget.querySelector("path:nth-of-type(3)").style.fill = isLightMode ? "#9D89FC" : "#E9FA50"; 
            }}
            onMouseLeave={(e) => {
                e.currentTarget.querySelector("path:nth-of-type(2)").style.fill = "#fff"; 
                e.currentTarget.querySelector("path:nth-of-type(3)").style.fill = "#fff"; 
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
                fill="#FDFDFD"
                d="M24.901 27.217c-5.44 0-9.868-4.428-9.869-9.867a2.506 2.506 0 0 1 2.501-2.5c.141 0 .282.011.415.036.295.048.574.148.833.298a.139.139 0 0 1 .069.1l.574 3.625a.14.14 0 0 1-.034.116 2.493 2.493 0 0 1-1.173.731l-.216.062.082.21a7.357 7.357 0 0 0 4.14 4.14l.211.083.06-.218a2.48 2.48 0 0 1 .732-1.173.142.142 0 0 1 .117-.033l3.623.574a.145.145 0 0 1 .102.069 2.503 2.503 0 0 1 .334 1.248 2.506 2.506 0 0 1-2.501 2.5Z"
            />
            <path
                style={{
                    transition: "fill 0.5s ease",
                }}
                fill="#FDFDFD"
                d="M34.549 19.807a13.348 13.348 0 0 0-4.277-8.658 13.346 13.346 0 0 0-9.061-3.538c-7.384 0-13.392 6.008-13.392 13.391 0 2.478.683 4.893 1.977 6.995l-2.885 6.389 9.241-.985c1.607.658 3.309.992 5.059.992.46 0 .932-.024 1.405-.072.417-.045.838-.11 1.253-.194 6.184-1.25 10.698-6.738 10.733-13.054v-.07c0-.404-.018-.805-.054-1.194v-.002Zm-18.042 10.79-5.113.544 1.527-3.382-.305-.41-.07-.094a10.593 10.593 0 0 1-2.025-6.254c0-5.895 4.796-10.69 10.69-10.69 5.522 0 10.202 4.309 10.653 9.808a10.83 10.83 0 0 1 .033 1.136 10.663 10.663 0 0 1-9.499 10.37 10.59 10.59 0 0 1-5.7-.934l-.194-.092.003-.002Z"
            />
        </svg>
    )
}

export default WhatsAppSvg
