import { useTheme } from "@emotion/react";
import * as React from "react";

const InstaSvg = (props) => {
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
                style={{
                    transition: "fill 0.5s ease",
                }}
                fill="#051A2F"
                d="M42 21c0 10.607-7.863 19.375-18.076 20.798a21.207 21.207 0 0 1-6.288-.066C7.638 40.122 0 31.452 0 20.999 0 9.402 9.402 0 21 0s21 9.402 21 21Z"
            />
            <path
                style={{
                    transition: "fill 0.5s ease",
                }}
                fill="#fff" 
                d="M27.576 8.394H14.423a6.596 6.596 0 0 0-6.589 6.59v12.032a6.596 6.596 0 0 0 6.59 6.59h13.152a6.596 6.596 0 0 0 6.59-6.59V14.983a6.596 6.596 0 0 0-6.59-6.589Zm-17.418 6.59a4.27 4.27 0 0 1 4.265-4.266h13.153a4.27 4.27 0 0 1 4.265 4.265v12.033a4.27 4.27 0 0 1-4.265 4.265H14.423a4.27 4.27 0 0 1-4.265-4.265V14.983Z"
            />
            <path
                fill="#fff" 
                d="M20.999 27.13c3.38 0 6.13-2.75 6.13-6.13s-2.75-6.13-6.13-6.13-6.13 2.75-6.13 6.13 2.75 6.13 6.13 6.13Zm0-9.934A3.808 3.808 0 0 1 24.803 21 3.808 3.808 0 0 1 21 24.804 3.808 3.808 0 0 1 17.195 21a3.808 3.808 0 0 1 3.804-3.804ZM27.698 15.86c.91 0 1.652-.742 1.652-1.652 0-.91-.742-1.652-1.652-1.652-.91 0-1.652.741-1.652 1.652 0 .91.741 1.652 1.652 1.652Z"
            />
        </svg>
    );
};

export default InstaSvg;
