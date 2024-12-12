import * as React from "react"
import {motion} from "framer-motion"
const SystemSvg = (props) => {
  return(
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={76}
    height={75}
    fill="none"
    {...props}
  >
    <g fill="#051A2F" clipPath="url(#a)">
      <motion.path
      animate={{x:["100%",0]}}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "easeInOut",
      }}
      d="M70.41 60.938H42.285v4.687H70.41v-4.688ZM70.41 49.219H42.285v4.687H70.41V49.22ZM70.41 37.5H42.285v4.688H70.41V37.5Z" />
      <path d="M32.908 58.594H22.361a17.57 17.57 0 0 1-3.098-34.866 23.438 23.438 0 0 1 46.458 4.397h-4.688a18.748 18.748 0 0 0-37.384-2.039l-.211 1.954-1.96.132a12.881 12.881 0 0 0 .883 25.734h10.547v4.688Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.098 0h75v75h-75z" />
      </clipPath>
    </defs>
  </svg>
  )

}
  

export default SystemSvg
