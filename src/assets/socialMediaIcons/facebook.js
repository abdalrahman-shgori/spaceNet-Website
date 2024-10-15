import { useTheme } from "@emotion/react";
import * as React from "react";

const FaceBookSvg = (props) => {
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
                e.currentTarget.querySelector("path:nth-of-type(2)").style.fill = isLightMode ? "#9D89FC " : "#E9FA50";
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
                d="M23.924 16.861v4.575h5.66l-.896 6.163h-4.764v14.199a21.19 21.19 0 0 1-6.288-.067V27.6h-5.219v-6.163h5.22v-5.597a6.29 6.29 0 0 1 6.288-6.289v.004c.01 0 .02-.004.03-.004h5.63v5.33h-3.679a1.98 1.98 0 0 0-1.98 1.98l-.002.001Z"
            />
        </svg>
    );
};

export default FaceBookSvg;
