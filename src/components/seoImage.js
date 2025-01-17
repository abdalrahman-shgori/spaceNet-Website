import React from "react";
import featuredImage from "../assets/spacenetLogo.png"

export const FeaturedImage = (props) =>(
    <>
    {
        props.customImage ? (
           <meta property="og:image" content={props.customImage}></meta>
        )
        :
        (
<meta name="og:image" content={'https://space-net-website.vercel.app/' + featuredImage}>

</meta>
        )
    }
    </>
)

export default FeaturedImage