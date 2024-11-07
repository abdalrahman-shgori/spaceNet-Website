import * as React from "react";
import { motion } from "framer-motion";

const FullStackSvg = (props) => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width={59}
            height={63}
            fill="none"
            {...props}
        >
            <motion.rect
                width={16.282}
                height={16.282}
                x={21.265}
                y={22.668}
                stroke={props.hoveredcardid === props.itemID ? "#051A2F" : "#9D89FC"}
                strokeWidth={3.042}
                rx={2.281}
                style={{
                    transition: "stroke 0.5s"
                }}
                animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 360],
                    boxShadow: [
                        "0px 0px 0px rgba(157, 137, 252, 0)",
                        "0px 0px 8px rgba(157, 137, 252, 0.8)",
                        "0px 0px 0px rgba(157, 137, 252, 0)"
                    ]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.path
                fill="#051A2F"
                fillRule="evenodd"
                d="M43.735 54.8H54.95V33.483H44.6v-3.65h12.175c1.007 0 1.824.817 1.824 1.825v24.968a1.825 1.825 0 0 1-1.824 1.825H43.732a6.191 6.191 0 0 1-5.904 4.349h-16.66a6.191 6.191 0 0 1-5.904-4.349H2.222a1.825 1.825 0 0 1-1.825-1.825V6.697c0-1.008.817-1.825 1.825-1.825h13.04A6.191 6.191 0 0 1 21.169.516h16.66a6.188 6.188 0 0 1 6.18 6.18 6.187 6.187 0 0 1-6.18 6.18h-6.505v4.352h-3.65v-4.352h-6.505a6.191 6.191 0 0 1-5.905-4.355H4.046v46.28h11.215a6.191 6.191 0 0 1 5.907-4.363h6.505V46.09h3.65v4.35h6.505a6.191 6.191 0 0 1 5.907 4.362Zm-25.098 1.82a2.533 2.533 0 0 0 2.53 2.53h16.661a2.533 2.533 0 0 0 2.531-2.53 2.534 2.534 0 0 0-2.53-2.532H21.167a2.534 2.534 0 0 0-2.531 2.531ZM37.828 4.164h-16.66a2.534 2.534 0 0 0-2.531 2.532 2.533 2.533 0 0 0 2.53 2.53h16.661a2.533 2.533 0 0 0 2.531-2.53 2.534 2.534 0 0 0-2.53-2.532Z"
                clipRule="evenodd"
                animate={{
                    pathLength: [0, 1],
                    strokeDasharray: "5 5",
                    strokeDashoffset: [0, 10]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </motion.svg>
    );
};

export default FullStackSvg;
